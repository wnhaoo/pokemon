import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../mock";
import { DetailWrapper, DetailBox, PokemonName, PokemonImage, TypeText, Description, BackButton, ActionButton } from "../styles/DetailStyle";
import { usePokemon } from "../context/PokemonContext";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
  const { selected, handleAdd, handleRemove } = usePokemon();

  const isSelected = selected.some((p) => p.id === pokemon.id);

  const handleClick = () => {
    isSelected ? handleRemove(pokemon.id) : handleAdd(pokemon);
    navigate('/dex');
  };

  return (
    <DetailWrapper>
      <DetailBox>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <TypeText>타입: {pokemon.types.join(", ")}</TypeText>
        <Description>{pokemon.description}</Description>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
        <ActionButton onClick={handleClick}>
          {isSelected ? "삭제" : "추가"}
        </ActionButton>
      </DetailBox>
    </DetailWrapper>
  );
};

export default Detail;