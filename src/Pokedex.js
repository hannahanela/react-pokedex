import { pokemonData } from "./pokemonList";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex({ pokemon = pokemonData }) {
  return (
    <ul>
      {pokemon.map((p) => (
        <li className="poke-dex-list">
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.type}
            baseExp={p.base_experience}
          />
        </li>
      ))}
    </ul>
  );
}

export default Pokedex;
