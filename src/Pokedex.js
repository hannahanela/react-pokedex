import Pokecard from "./Pokecard";

function Pokedex({ pokemon }) {
  return (
    <ul>
      {pokemon.map((p) => (
        <li>
          <Pokecard
            name={p.name}
            image={p.id}
            type={p.type}
            exp={p.base_experience}
          />
        </li>
      ))}
    </ul>
  );
}

export default Pokedex;