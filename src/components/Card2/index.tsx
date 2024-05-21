import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonInstallments from '../../components/ButtonInstallments';
import { useSliderValue } from '../../components/Contexts/SliderValueContext';
import GenericCard from '../../components/GenericCard';
import { AdditionalDiv, Installments, Paragraph5, ValueContainer, ValueText } from './styles';

const Card2: React.FC = () => {
  const history = useHistory();
  const { sliderValue, setClickedButtonInfo } = useSliderValue();
  const [installments, setInstallments] = useState<number[]>([0, 0, 0, 0]);
  const [activeButton, setActiveButton] = useState<number | null>(null); // Estado para controlar o botão ativo

  const handlePrimaryButtonClick = () => {
    history.push('/');
  };

  const handleSecondaryButtonClick = () => {
    history.push('/card3');
  };

  useEffect(() => {
    const calculateInstallments = (value: number, numInstallments: number) => {
      return value / numInstallments;
    };

    const updateInstallments = () => {
      const values = [1, 2, 3, 4];
      const newInstallments = values.map((num) => {
        return calculateInstallments(sliderValue, num);
      });
      setInstallments(newInstallments);
    };

    updateInstallments();
  }, [sliderValue]);

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Escolha uma opção de parcelamento que melhor funcionar para você:"
      titleBody="Simular Empréstimo"
      button1Text="Voltar"
      onButton1Click={handlePrimaryButtonClick}
      button1Color="#057D88"
      button2Text="Seguinte"
      onButton2Click={handleSecondaryButtonClick}
      button2Color="#fffff"
    >
      <AdditionalDiv>
        <ValueContainer>
          <ValueText>R$ {sliderValue}</ValueText>
        </ValueContainer>
        <Paragraph5>Divididas em:</Paragraph5>
        <Installments>
          {installments.map((value, index) => (
            <ButtonInstallments
              key={index}
              text={`${index + 1}x de`}
              buttonText={value.toFixed(2).replace('.', ',')}
              active={activeButton === index} 
              onClick={() => {

                setClickedButtonInfo(`${index + 1}x de ${value.toFixed(2).replace('.', ',')}`);
                setActiveButton(index); 
              }}
            />
          ))}
        </Installments>
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card2;
