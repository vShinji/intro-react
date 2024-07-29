import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import ErrorBoundary from "./ErrorBoundary";
import AdoptedPetContext from "./AdoptedPetContext";
import Carousel from "./Carousel";
import fetchPet from "./fetchPet";
import Modal from "./Modal";

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="align-center flex justify-center p-4">
        <h2 className="animate-bounce text-8xl">🐾</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details my-0 mx-auto mb-6 w-3/5 rounded-md bg-neutral-100 p-4 shadow-default">
      <Carousel images={pet.images} />
      <div className="mt-32 flex flex-col items-center justify-items-center gap-2">
        <h1 className="text-xl font-bold">{pet.name}</h1>
        <h2 className="italic">
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="rounded border-none bg-blue-300 px-6 py-2 text-black  hover:opacity-50"
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div>
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                  className="rounded border-none bg-blue-300 px-6 py-2 text-black  hover:opacity-50"
                >
                  Yes
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded border-none bg-red-500 px-6 py-2 text-black  hover:opacity-50"
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
