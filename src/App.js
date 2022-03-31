import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ItemSlider from "./components/ItemSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ItemSlider />
      <ItemSlider />
    </div>
  );
}

export default App;
