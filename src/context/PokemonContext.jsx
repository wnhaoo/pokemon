import { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

const PokemonContext = createContext();

export const usePokemon = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [selected, setSelected] = useState([]);

  const handleAdd = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      Swal.fire({
      icon: 'warning',
      title: '이미 선택됨',
      text: '이미 선택된 포켓몬입니다!',
    });
      return;
    }
    if (selected.length >= 6) {
      Swal.fire({
      icon: 'error',
      title: '제한 초과',
      text: '더 이상 선택할 수 없습니다!',
    });
      return;
    }
    setSelected([...selected, pokemon]);
  };

  const handleRemove = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ selected, handleAdd, handleRemove }}>
      {children}
    </PokemonContext.Provider>
  );
};