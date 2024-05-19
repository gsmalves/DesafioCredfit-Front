import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowChevron from '../../assets/ArrowChevron.svg';
import betina from '../../assets/betina-sorrindo_2x 1.svg';
import CustomButton from '../../components/Button';

import {
  AdditionalDiv,
  BackIcon,
  ButtonWrapper,
  CardBody,
  CardContainer,
  CardHeader,
  Footer,
  Image,
  InnerDiv,
  OuterDiv,
  SubTitle,
  Text,
  Title,
  TitleBody
} from './styles';

interface GenericCardProps {
  title?: string;
  text?: string;
  titleBody?: string;
  button1Text?: string;
  button1Color?: string;
  onButton1Click?: () => void;
  button2Text?: string;
  button2Color?: string;
  onButton2Click?: () => void;
  children?: React.ReactNode;
}

const GenericCard: React.FC<GenericCardProps> = ({
  title,
  text,
  titleBody,
  button1Text,
  button1Color,
  onButton1Click,
  button2Text,
  button2Color,
  onButton2Click,
  children
}) => {
  const history = useHistory();
  const [isButton1Clicked, setIsButton1Clicked] = useState(false);
  const [isButton2Clicked, setIsButton2Clicked] = useState(false);

  const handleBackClick = () => {
    history.push('/');
  };

  const handleButton1Click = () => {
    setIsButton1Clicked(true);
    setIsButton2Clicked(false);
    if (onButton1Click) onButton1Click();
  };

  const handleButton2Click = () => {
    setIsButton1Clicked(false);
    setIsButton2Clicked(true);
    if (onButton2Click) onButton2Click();
  };

  return (
    <CardContainer>
      <CardHeader>
        <BackIcon src={arrowChevron} alt="Back" onClick={handleBackClick} />
        <div>
          <SubTitle>Home / Crédito Consignado</SubTitle>
          <Title>{title}</Title>
        </div>
      </CardHeader>
      <CardBody>
        <TitleBody>{titleBody}</TitleBody>
        <OuterDiv>
          <InnerDiv>
            <Image src={betina} alt="Betina Sorrindo" />
            <Text>{text}</Text>
          </InnerDiv>
        </OuterDiv>
        {children}
        <AdditionalDiv>
          {/* Conteúdo adicional, se necessário */}
        </AdditionalDiv>
      </CardBody>
      <Footer>
        <ButtonWrapper>
          <CustomButton onClick={handleButton1Click} buttonType="Secondary" style={{ backgroundColor: isButton1Clicked ? '#D6DBDB' : undefined }} color={isButton1Clicked ? '#535F5F' : button1Color}>
            {button1Text}
          </CustomButton>
          <CustomButton onClick={handleButton2Click} buttonType="Primary" style={{ backgroundColor: isButton2Clicked ? '#D6DBDB' : undefined }} color={isButton2Clicked ? '#535F5F' : button2Color}>
            {button2Text}
          </CustomButton>
        </ButtonWrapper>
      </Footer>
    </CardContainer>
  );
};

export default GenericCard;
