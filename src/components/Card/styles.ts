import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 536px;
  height: 509px;
  position: absolute;
  top: 144px;
  left: 358px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

`;

export const CardHeader = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #f0f0f0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;


export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 8px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #057d88;
  margin: 0;
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;
