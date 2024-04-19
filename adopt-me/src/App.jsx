import ReactDOM from "react-dom";
import Pet from "./Pet"

const App = () => {
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Minnie" animal="Dog" breed="Mixed"/>
      <Pet name="Mel" animal="Dog" breed="Mixed"/>
      <Pet name="Raiden" animal="Dog" breed="Mixed"/>
    </div>
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
