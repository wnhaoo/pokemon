import { useNavigate } from "react-router-dom";
import { Card, PokemonImage, PokemonName, TypeText, AddButton } from "../styles/PokemonCardStyle";

const PokemonCard = ({pokemon, onAdd}) => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <div onClick={() => navigate(`/detail/${pokemon.id}`)} style={{ cursor: "pointer" }}>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <TypeText>{pokemon.types.join(", ")}</TypeText>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      </div>
      <AddButton onClick={() => onAdd(pokemon)}>추가</AddButton>
    </Card>
  );
};

export default PokemonCard;