import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #ffffff;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;