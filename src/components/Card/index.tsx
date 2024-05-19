import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowChevron from '../../assets/ArrowChevron.svg';

import betina from '../../assets/betina-sorrindo_2x 1.svg';
import {
  AdditionalDiv,
  BackIcon,
  CardBody,
  CardContainer,
  CardHeader,
  Footer,
  Image,
  InnerDiv,
  OuterDiv,
  SimulateLoanButton,
  SliderContainer,
  StyledSlider,
  SubTitle,
  Text,
  Title,
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

  return (
    <CardContainer>
      <CardHeader>
        <BackIcon src={arrowChevron} alt="Back" onClick={handleBackClick} />
        <div>
          <SubTitle>Home / Crédito Consignado</SubTitle>
          <Title>Crédito Consignado</Title>
        </div>
      </CardHeader>
      <CardBody>
        <SimulateLoanButton>Simular Empréstimo</SimulateLoanButton>
        <OuterDiv>
          <InnerDiv>
            <Image src={betina} alt="Betina Sorrindo" />
            <Text>Você possui para Crédito Consignado pela empresa X. Faça uma simulação. Indique quanto você precisa:</Text>
          </InnerDiv>
        </OuterDiv>
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
      </CardBody>
      <Footer>



      </Footer>
    </CardContainer>
  );
};

export default Card;
