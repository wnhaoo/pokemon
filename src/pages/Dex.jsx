import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MOCK_DATA from "../../mock";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { Container, ListWrapper } from "../styles/DexStyle";

const Dex = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);

  // 추가
  const handleAdd = (pokemon) => {
    if(selected.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    if(selected.length >= 6) {
      alert("더 이상 선택할 수 없습니다.");
      return;
    }
    setSelected([...selected, pokemon]);
  };

  // 삭제
  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <Dashboard selected={selected} onRemove={handleRemove} />
      <ListWrapper>
        <PokemonList data={MOCK_DATA} onAdd={handleAdd} />
      </ListWrapper>
    </Container>
  );
};

export default Dex;