// src/components/Card/index.tsx
import React from 'react';
import { useHistory } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import { useSliderValue } from '../Contexts/SliderValueContext';
import { AdditionalDiv, SliderContainer, StyledSlider, ValueContainer, ValueText } from './styles';

const Card: React.FC = () => {
  const history = useHistory();
  const { sliderValue, setSliderValue } = useSliderValue();

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handlePrimaryButtonClick = () => {
    history.push('/');
  };

  const handleSecondaryButtonClick = () => {
    history.push('/card2');
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Você possui para Crédito Consignado pela empresa X. Faça uma simulação. Indique quanto você precisa:"
      titleBody="Simular empréstimo"
      button1Text="Voltar"
      onButton1Click={handlePrimaryButtonClick}
      button1Color="#057D88"
      button2Text="Solicitar Empréstimo"
      onButton2Click={handleSecondaryButtonClick}
      button2Color="#fffff"
    >
      <AdditionalDiv>
        <ValueContainer>
          <ValueText>R$ {sliderValue}</ValueText>
        </ValueContainer>
        <SliderContainer>
          <StyledSlider
            min={0}
            max={50000}
            defaultValue={0}
            onChange={handleSliderChange}
          />
        </SliderContainer>
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card;
