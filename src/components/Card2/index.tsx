import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonInstallments from '../../components/ButtonInstallments';
import { useSliderValue } from '../../components/Contexts/SliderValueContext'; // Certifique-se de importar o contexto corretamente
import GenericCard from '../../components/GenericCard';
import { AdditionalDiv, Installments, Paragraph5, ValueContainer, ValueText } from './styles';

const Card2: React.FC = () => {
  const history = useHistory();
  const { sliderValue } = useSliderValue();
  const [installments, setInstallments] = useState<number[]>([0, 0, 0, 0]); // Define o estado 'installments' e a função 'setInstallments'

  const handlePrimaryButtonClick = () => {
    history.push('/');
  };

  const handleSecondaryButtonClick = () => {
    history.push('/card3');
  };

  useEffect(() => {
    // Lógica para calcular as parcelas
    const calculateInstallments = (value: number, numInstallments: number) => {
      return value / numInstallments;
    };

    // Atualiza as parcelas com base no valor do slider
    const updateInstallments = () => {
      const values = [1, 2, 3, 4]; // Número de parcelas
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
 <ButtonInstallments
  text="1x de"
  buttonText={installments[0].toFixed(2).replace('.', ',')} // Substitui o ponto por vírgula
  onClick={() => console.log('Botão 1 clicado')}
/>
<ButtonInstallments
  text="2x de"
  buttonText={installments[1].toFixed(2).replace('.', ',')} // Substitui o ponto por vírgula
  onClick={() => console.log('Botão 2 clicado')}
/>
<ButtonInstallments
  text="3x de"
  buttonText={installments[2].toFixed(2).replace('.', ',')} // Substitui o ponto por vírgula
  onClick={() => console.log('Botão 3 clicado')}
/>
<ButtonInstallments
  text="4x de"
  buttonText={installments[3].toFixed(2).replace('.', ',')} // Substitui o ponto por vírgula
  onClick={() => console.log('Botão 4 clicado')}
/>
        </Installments>
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card2;
