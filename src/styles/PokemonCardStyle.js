import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid #000000;
  border-radius: 10px;
  width: 150px;
  padding: 20px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const PokemonName = styled.div`
  color: #000;
  font-size: 18px;
  font-weight: 900;
`;

export const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

export const TypeText = styled.p`
  font-size: 15px;
  color:rgb(0, 147, 81);
  margin: 0px;
`;

export const AddButton = styled.button`
  padding: 6px 55px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    border: 1px solid #000000;
    color: #ffffff;
  }
`;