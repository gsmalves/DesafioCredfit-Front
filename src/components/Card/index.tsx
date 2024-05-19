// index.tsx
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import GenericCard from '../../components/GenericCard'; // Importando o GenericCard

import {
  AdditionalDiv,
  SliderContainer,
  StyledSlider,
  ValueContainer,
  ValueText
} from './styles';

const Card: React.FC = () => {
  const history = useHistory();
  const [sliderValue, setSliderValue] = useState<number>(0); // Valor inicial do slider

  const handleBackClick = () => {
    history.push('/');
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };


  const handlePrimaryButtonClick = () => {
    console.log('Primary button clicked');
  };

  const handleSecondaryButtonClick = () => {
    console.log('Secondary button clicked');
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Você possui para Crédito Consignado pela empresa X. Faça uma simulação. Indique quanto você precisa:"
      titleBody="Simular empréstimo"
      button1Text="Voltar"
      onButton1Click={handlePrimaryButtonClick}
      button1Color="#057D88" // Adicionando a cor do primeiro botão
      button2Text="Solicitar Empréstimo"
      onButton2Click={handleSecondaryButtonClick}
      button2Color="#fffff" // Adicionando a cor do segundo botão
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
