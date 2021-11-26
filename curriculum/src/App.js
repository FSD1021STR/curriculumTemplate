import logo from "./logo.svg";
import "./App.css";
import Curriculum from "./curriculum";
import Formulario from "./form";
import img from "./imagen.jpg";

function App() {
  const linkimg = "./curriculum/src/imagen.jpg";
  return (
    <div>
      <img src={linkimg} alt="kobe" />
    </div>
  );
}

export default App;
