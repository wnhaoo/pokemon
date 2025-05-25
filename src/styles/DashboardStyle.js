import styled from "styled-components";

export const DashboardWrapper = styled.div`
  padding: 40px;
  background-color:rgb(200, 0, 0);
  margin-bottom: 20px;
  border-radius: 30px;
`;

export const DashboardTitle = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 900;
  text-align: center;
  padding-bottom: 20px;
`;

export const SelectedList = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const EmptyCard = styled.div`
  border: 2px dashed #fff;
  border-radius: 10px;
  color: #ffffff;
  min-width: 78px;
  width: 20%;
  height: 138px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);

  @media (max-width: 700px) {
    width: 25%;
  }
`;

export const SelectedCard = styled.div`
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 10px;
  background-color: #ffffff;
  color: #000000;
  width: 20%;
  height: 120px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    width: 25%;
  }
`;

export const SelectedName = styled.div`
font-size: 15px;
font-weight: 900;
`;

export const SelectedImage = styled.img`
  width: 60px;
`;

export const RemoveButton = styled.button`
  margin-top: 10px;
  padding: 4px 15px;
  border: 1px solid rgb(255, 0, 0);
  border-radius: 5px;
  background-color: #ffffff;
  color: rgb(255, 0, 0);
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgb(255, 0, 0);
    color: #ffffff;
    border: 1px solid rgb(255, 0, 0);
  }
`;
