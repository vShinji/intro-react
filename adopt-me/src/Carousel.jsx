import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["https://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="align-center mt-5 flex h-96 flex-col items-center justify-items-center">
        <img
          className="max-h-96 max-w-lg"
          src={images[active]}
          alt="animal hero"
        />
        <div className="flex w-1/2 justify-center">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={
                index === active
                  ? "active m-4 inline-block h-24 w-24 cursor-pointer rounded-full border-gray-600"
                  : "m-4 inline-block h-24 w-24 cursor-pointer rounded-full border-gray-600 brightness-75"
              }
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
