import PokemonCard from "./PokemonCard";
import { ListWrapper } from "../styles/PokemonList";

const PokemonList = ({ data }) => {
  return (
    <ListWrapper>
      {data.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;