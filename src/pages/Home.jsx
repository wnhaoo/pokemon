import { useNavigate } from "react-router-dom";
import { HomeWrapper, PokemonLogo, HomeButton } from "../styles/HomeStyle";
import pokemonlogo from "../assets/pokemonlogo.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <HomeWrapper>
      <PokemonLogo src={pokemonlogo} alt={pokemonlogo} />
      <HomeButton onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</HomeButton>
    </HomeWrapper>
  );
};

export default Home;