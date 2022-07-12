import { pokemonData } from "./pokemonList";
import Pokedex from "./Pokedex";
import "./App.css";

function App() {
  // we can chose to supply a prop (pokemon=pokemonData) or let fall
  // to default (in Pokedex).
  return (
    <div className="App">
      <Pokedex />
    </div>
  );
}

export default App;
