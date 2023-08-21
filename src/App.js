import "./styles.css";
import ItemListContainer from "./components/itemListContainer";
import Navbar from "./components/navbar";
import CartWidget from "./components/cartwidget";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
}
