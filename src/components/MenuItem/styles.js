import styled from "styled-components";

export const MenuItem = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-right: 7.5px;
  }
`;
export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubTitle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;
