import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const PokemonLogo = styled.img`
  width: 70%;
`;

export const HomeButton = styled.button`
  margin-top: 20px;
  padding: 10px 30px;
  background-color: rgb(255, 0, 0);
  border: 1px solid rgb(255, 0, 0);
  border-radius: 10px;
  color: #ffffff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(200, 0, 0);
    border: 1px solid rgb(200, 0, 0);
  }
`;