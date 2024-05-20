import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowChevron3 from '../../assets/ArrowChevron3.svg';
import groupImage from '../../assets/Group.svg';
import checkImage from '../../assets/check-icon.svg';
import { useSliderValue } from '../../components/Contexts/SliderValueContext';
import GenericCard from '../../components/GenericCard';
import { AdditionalDiv, ArrowDiv, ExpandedContent, ImageDiv, InnerDiv, TextDiv } from './styles';

interface Card {
  id: number;
  imageUrl: string;
  title: string;
  isExpanded: boolean;
}

const Card4: React.FC = () => {
  const { sliderValue, clickedButtonInfo } = useSliderValue();
  const history = useHistory();
  const [cards, setCards] = useState<Card[]>([
    { id: 1, imageUrl: groupImage, title: 'SOLICITAÇÃO DE EMPRÉSTIMO 01', isExpanded: false },
    { id: 2, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 01', isExpanded: false },
    { id: 3, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 02', isExpanded: false },
    { id: 4, imageUrl: checkImage, title: 'EMPRÉSTIMO CORRENTE 03', isExpanded: false },
    // Adicione mais objetos conforme necessário
  ]);

  const handleBackButtonClick = () => {
    history.push('/card2');
  };

  const handleArrowClick = (cardId: number) => {
    setCards(prevCards =>
      prevCards.map(card =>
        card.id === cardId ? { ...card, isExpanded: !card.isExpanded } : card
      )
    );
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
              <ArrowDiv onClick={() => handleArrowClick(card.id)}>
                <img src={arrowChevron3} alt="Expandir" />
              </ArrowDiv>
            </InnerDiv>
            <ExpandedContent isExpanded={card.isExpanded}>
              {/* Conteúdo expandido vai aqui */}
              <p>Detalhes adicionais do empréstimo {card.id}...</p>
            </ExpandedContent>
          </React.Fragment>
        ))}
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card4;
