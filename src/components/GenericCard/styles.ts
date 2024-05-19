import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 536px;
  height: 509px;
  position: absolute;
  top: 100px;
  left: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

`;

export const CardHeader = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  background-color: #F5F5F5;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled.h2`
  color: #057d88;
  font-size: 20px;
  margin-top: 4px;
`;

export const BackIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 8px;
`;

export const SubTitle = styled.span`
  color: #000;
  font-size: 10px;
`;

export const CardBody = styled.div`
  width: 536px;
  height: 373px;
  padding: 24px;
  gap: 16px;
  border-radius: 16px 0 0 0;
  background: #FFFFFF;
`;

export const TitleBody = styled.div`
  background-color: white;
  color: #057d88;
  font-size: 16px;
  border: none;
  padding: 8px 16px;
`;

export const OuterDiv = styled.div`
  width: 488px;
  height: 104px;
  padding: 16px;
  gap: 8px;
  border-radius: 16px;
  background-color: #FFE5D5;
  display: flex;
  align-items: center;
`;

export const InnerDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Text = styled.p`
  font-size: 12px;
  color: #000;
  margin-left: 8px;
`;

export const AdditionalDiv = styled.div`
  width: 470.83px;
  height: 168px;
  padding: 24px 0;
  gap: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;




export const Footer = styled.footer`
  display: flex;
  justify-content: flex-start; /* Alinha os botões à esquerda */
  width: 100%;
  padding: 20px; /* Ajuste conforme necessário */
  background-color: #F5F5F5;
`;

export const ButtonWrapper = styled.div`
  width: 424px;
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  opacity: 1;
  position: relative;
  left: 80px; 
`;