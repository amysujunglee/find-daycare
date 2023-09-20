import Daycare from "./components/Daycare";
import Region from "./components/Region";

function App() {
  return (
    <div>
      <h1>Find Daycare</h1>
      <Region name="Burnaby" />
      <Region name="Coquitlam" />
      <Daycare />
    </div>
  );
}

export default App;
