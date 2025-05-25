import PokemonCard from "./PokemonCard";
import { ListWrapper } from "../styles/PokemonList";

const PokemonList = ({data, onAdd}) => {
  return (
    <ListWrapper>
      {data.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAdd}
        />
      ))}
    </ListWrapper>
  );
};

export default PokemonList;