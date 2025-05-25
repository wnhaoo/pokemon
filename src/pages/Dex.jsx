import MOCK_DATA from "../../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { Container, ListWrapper } from "../styles/DexStyle";
import { usePokemon } from "../context/PokemonContext";

const Dex = () => {
  const { selected } = usePokemon();

  return (
    <Container>
      <Dashboard />
      <ListWrapper>
        <PokemonList data={MOCK_DATA} />
      </ListWrapper>
    </Container>
  );
};

export default Dex;