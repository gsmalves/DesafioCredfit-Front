import styled from 'styled-components';

export const AdditionalDiv = styled.div`
  position: relative; /* Adiciona posição relativa para que o ScrollBar seja relativo a este container */
  width: 479px;
  height: 250px;
  overflow-y: auto;
  padding: 24px 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InnerDiv = styled.div`
  width: 100%;
  height: 15px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const ArrowDiv = styled.div`
  width: 24px;
  height: 24px;
  padding: 7.77px 3px;
  cursor: pointer;
`;

export const ImageDiv = styled.div<{ imageUrl: string }>`
  width: 44px;
  height: 44px;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-position: center;
`;

export const TextDiv = styled.div`
  width: calc(100% - 44px - 24px);
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  color: #2a3535;
`;

export const ExpandedContent = styled.div`
  display: ${(props: { isExpanded: boolean }) => (props.isExpanded ? 'block' : 'none')};
  padding: 10px;
  border-top: 1px solid #ccc;
  width: 100%;
  background-color: #fff;
`;

export const ExpandedContentWrapper = styled.div`
  width: 400px;
  height: 50px;
  gap: 0px;
  justify-content: space-between;
  display: flex;
  background-color: #fff;
  
`;

export const InnerContent = styled.div`
  display: flex;
  justify-content: space-around; /* Alterado para espaço entre os itens */
  align-items: center; /* Alinhando os itens verticalmente */
  width: 240px;
  height: 40px;
  padding: 8px 0px 0px 0px;
  gap: 0px;
  border-radius: 8px 0px 0px 0px;
  background: #9af8ab29;
`;

export const Paragraph = styled.p`
  width: 150px;
  height: 24px;
  gap: 0px;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  margin-left: -35px;
  color: #01354e;

`;

export const ImageWrapper = styled.div`
  width: 30px;
  height: 30px;

`;

export const Image = styled.div<{ imageUrl: string }>`
 width: 28px;
  height: 28px;
  background-image: url(${props => props.imageUrl});
  background-size: contain;
  background-position: center;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center; /* Alinha verticalmente o botão */
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 44px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const OcultarText = styled.div`
  width: 44px;
  height: 18px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  text-align: left;
  color: #535f5f;
`;

export const ButtonAndTextWrapper = styled.div`
  width: 84px;
  height: 44px;
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center;
`;

export const OuterDiv = styled.div`
  width: 195px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LeftDivTop = styled.div`
  width: 180px;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export const LeftDivTopText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;

export const LeftDivBottom = styled.div`
  width: 180px;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export const LeftDivBottomText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color:  #535F5F;
;
`;
export const RightDiv = styled.div`
  width: 180px;
  height: 40px;
  border-radius: 4px;
`;

export const RightDivTop = styled.div`
  width: 180px;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export const RightDivTopText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #000000;
`;

export const RightDivBottom = styled.div`
  width: 180px;
  height: 20px;
  background-color: #fff;
  border-radius: 4px;
`;

export const RightDivBottomText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #535F5F;
`;
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;


export const Line = styled.div`
  width: 380px;
  height: 0;
  border: 1px solid #BBC3C4;
  border-width: 1px 0 0 0;
  margin: 20px 0;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 10px;
  width: 400px;
  height: 350px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const InformationsWrapper = styled.div`
  width: 400px;
  height: 200px;
  background: #fff;

  padding: 10px;
  margin-top: 10px;
  border: 1px solid #fff;
  border-radius: 5px;

`;