import { usePokemon } from "../context/PokemonContext";
import { DashboardWrapper, DashboardTitle, EmptyCard, SelectedList, SelectedCard, SelectedImage, SelectedName, RemoveButton } from "../styles/DashboardStyle";

const Dashboard = () => {
  const { selected, handleRemove } = usePokemon();
  const slots = Array(6).fill(null);

  return (
    <DashboardWrapper>
      <DashboardTitle>나만의 포켓몬</DashboardTitle>
      <SelectedList>
        {slots.map((_, i) => {
          const pokemon = selected[i];
          if (pokemon) {
            return (
              <SelectedCard key={pokemon.id}>
                <SelectedName>{pokemon.korean_name}</SelectedName>
                <SelectedImage src={pokemon.img_url} alt={pokemon.korean_name} />
                <RemoveButton onClick={() => handleRemove(pokemon.id)}>삭제</RemoveButton>
              </SelectedCard>
            );
          } else {
            return (
              <EmptyCard key={`empty-${i}`}>+</EmptyCard>
            );
          }
        })}
      </SelectedList>
    </DashboardWrapper>
  );
};

export default Dashboard;