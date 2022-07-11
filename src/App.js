import { Pokemon } from './pokemonList';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pokedex pokemon={Pokemon}/>
    </div>
  );
}

export default App;
