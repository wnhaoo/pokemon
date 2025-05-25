import styled from "styled-components";

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: white;
`;

export const DetailBox = styled.div`
  border: 2px solid #000000;
  border-radius: 30px;
  padding: 100px 40px;
  width: 80%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

export const PokemonName = styled.div`
  color: #000000;
  font-size: 30px;
  font-weight: 900;
`;

export const PokemonImage = styled.img`
  width: 200px;
`;

export const TypeText = styled.p`
  font-size: 20px;
  font-weight: bold;
  color:rgb(0, 114, 21);
`;

export const Description = styled.p`
  font-size: 20px;
  color: #000000;
`;

export const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #ffffff;
  border: 1px solid rgb(255, 0, 0);
  border-radius: 10px;
  color: rgb(255, 0, 0);
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 0, 0);
    border: 1px solid rgb(255, 0, 0);
    color : #ffffff;
  }
`;