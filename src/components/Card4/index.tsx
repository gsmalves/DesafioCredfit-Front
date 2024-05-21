import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowChevron3 from '../../assets/ArrowChevron3.svg';
import closeButtonSvg from '../../assets/Button-close.svg';
import groupImage from '../../assets/Group.svg';
import checkImage from '../../assets/check-icon.svg';
import { useSliderValue } from '../../components/Contexts/SliderValueContext';
import GenericCard from '../../components/GenericCard';
import {
  AdditionalDiv,
  ArrowDiv,
  ButtonAndTextWrapper,
  CloseButton,
  CloseButtonIcon,
  CloseButtonWrapper,
  ExpandedContentWrapper,
  Image,
  ImageDiv,
  ImageWrapper,
  InformationsWrapper,
  InnerContent,
  InnerDiv,
  LeftDiv,
  LeftDivBottom,
  LeftDivBottomText,
  LeftDivTop,
  LeftDivTopText,
  Line,
  Modal,
  ModalContent,
  ModalOverlay,
  OcultarText,
  OuterDiv,
  Paragraph,
  RightDiv,
  RightDivBottom,
  RightDivBottomText,
  RightDivTop,
  RightDivTopText,
  TextDiv
} from './styles';

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  isExpanded: boolean;
  closeButtonSvg: string;
}

const Card4: React.FC = () => {
  const { sliderValue, clickedButtonInfo } = useSliderValue();
  const history = useHistory();
  const [cards, setCards] = useState<Card[]>([
    { id: 1, imageUrl: groupImage, title: 'SOLICITAÇÃO DE EMPRÉSTIMO 01', isExpanded: false, closeButtonSvg: closeButtonSvg },
    { id: 2, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 01', isExpanded: false, closeButtonSvg: closeButtonSvg },
    { id: 3, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 02', isExpanded: false, closeButtonSvg: closeButtonSvg },
    { id: 4, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 03', isExpanded: false, closeButtonSvg: closeButtonSvg },
  ]);

  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const handleBackButtonClick = () => {
    history.push('/card2');
  };

  const handleArrowClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Você solicitou seu empréstimo! Agora aguarde as etapas de análises serem concluídas!"
      button1Text="Voltar"
      onButton1Click={handleBackButtonClick}
      button1Color="#057D88"
      button2Text="Novo empréstimo"
      onButton2Click={() => console.log('Ação 2 clicada')}
      button2Color="#fff"
    >
      <AdditionalDiv>
        {cards.map(card => (
          <React.Fragment key={card.id}>
            <InnerDiv>
              <ImageDiv imageUrl={card.imageUrl} />
              <TextDiv>{card.title}</TextDiv>
              <ArrowDiv onClick={() => handleArrowClick(card)}>
                <img src={arrowChevron3} alt="Expandir" />
              </ArrowDiv>
            </InnerDiv>
          </React.Fragment>
        ))}
      </AdditionalDiv>

      {selectedCard && (
        <ModalOverlay>
          <Modal>
            <ModalContent>
              <InnerDiv>
                <ImageDiv imageUrl={selectedCard.imageUrl} />
                <TextDiv>{selectedCard.title}</TextDiv>
              </InnerDiv>
              <Line/>
              <ExpandedContentWrapper>
                <InnerContent>
                  <ImageWrapper>
                    <Image imageUrl={selectedCard.imageUrl} />
                  </ImageWrapper>
                  <Paragraph>Crédito Aprovado</Paragraph>
                </InnerContent>
                <ButtonAndTextWrapper>
                  <CloseButtonWrapper>
                    <CloseButton onClick={handleCloseModal}>
                      <CloseButtonIcon src={selectedCard.closeButtonSvg} alt="Botão Fechar" />
                    </CloseButton>
                  </CloseButtonWrapper>
                  <OcultarText>Ocultar</OcultarText>
                  </ButtonAndTextWrapper>
              </ExpandedContentWrapper>
              <InformationsWrapper>
              <OuterDiv>
                    <LeftDiv>
                      <LeftDivTop>
                        <LeftDivTopText>Empresa</LeftDivTopText>
                      </LeftDivTop>
                      <LeftDivBottom>
                        <LeftDivBottomText>Seguros Seguradora</LeftDivBottomText>
                      </LeftDivBottom>
                    </LeftDiv>
                    <RightDiv>
                      <RightDivTop>
                        <RightDivTopText>Data de Vencimento</RightDivTopText>
                      </RightDivTop>
                      <RightDivBottom>
                        <RightDivBottomText>29/06/2024</RightDivBottomText>
                      </RightDivBottom>
                    </RightDiv>
                  </OuterDiv>
                  <OuterDiv>
                    <LeftDiv>
                      <LeftDivTop>
                        <LeftDivTopText>Numéros de  Parcelas</LeftDivTopText>
                      </LeftDivTop>
                      <LeftDivBottom>
                        <LeftDivBottomText>2x</LeftDivBottomText>
                      </LeftDivBottom>
                    </LeftDiv>
                    <RightDiv>
                      <RightDivTop>
                        <RightDivTopText>Valor da Parcela</RightDivTopText>
                      </RightDivTop>
                      <RightDivBottom>
                        <RightDivBottomText>R$ 500</RightDivBottomText>
                      </RightDivBottom>
                    </RightDiv>
                  </OuterDiv>
                  <OuterDiv>
                    <LeftDiv>
                      <LeftDivTop>
                        <LeftDivTopText>Total Financiado</LeftDivTopText>
                      </LeftDivTop>
                      <LeftDivBottom>
                        <LeftDivBottomText>R$ 1000</LeftDivBottomText>
                      </LeftDivBottom>
                    </LeftDiv>
                    </OuterDiv>
              </InformationsWrapper>

            </ModalContent>
          </Modal>
        </ModalOverlay>
      )}
    </GenericCard>
  );
};

export default Card4;
