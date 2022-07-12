import "./Pokecard.css";
const IMG_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

function Pokecard({ name, id, type, baseExp }) {
  return (
    //TODO: Change to the name of the component
    <div className="poke-card">
      <h1 className="poke-card-name">{name}</h1>
      <img src={`${IMG_BASE_URL}/${id}.png`} alt={name}></img>
      <p>Type: {type}</p>
      <p>EXP: {baseExp}</p>
    </div>
  );
}

export default Pokecard;
