import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../../mock";
import { DetailWrapper, DetailBox, PokemonName, PokemonImage, TypeText, Description, BackButton } from "../styles/DetailStyle";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));

  return (
    <DetailWrapper>
      <DetailBox>
        <PokemonName>{pokemon.korean_name}</PokemonName>
        <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
        <TypeText>타입: {pokemon.types.join(", ")}</TypeText>
        <Description>{pokemon.description}</Description>
        <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
      </DetailBox>
    </DetailWrapper>
  );
};

export default Detail;