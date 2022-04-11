import "./App.css";
import Navbar from "./Component/Navbar";
import Product from "./Component/Product";
import TypeBar from "./Component/TypeBar";
import TypeFood from "./Component/TypeFood";
import FoodBar from "./Component/FoodBar";
import Cart from "./Component/Cart";

function App() {
  return (
    <div className="App">
      <div className="left-column">
        <Navbar />
        <TypeBar />
      </div>
      <div className="right-column">
        <Cart />
      </div>
    </div>
  );
}

export default App;
