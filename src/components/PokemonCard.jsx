import { useNavigate } from "react-router-dom";
import { Card, PokemonImage, PokemonName, TypeText, AddButton } from "../styles/PokemonCardStyle";
import { usePokemon } from "../context/PokemonContext";

const PokemonCard = ({pokemon}) => {
  const navigate = useNavigate();
  const { handleAdd } = usePokemon();
  
  return (
    <Card>
      <div onClick={() => navigate(`/detail/${pokemon.id}`)} style={{ cursor: "pointer" }}>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <TypeText>{pokemon.types.join(", ")}</TypeText>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      </div>
      <AddButton onClick={() => handleAdd(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;