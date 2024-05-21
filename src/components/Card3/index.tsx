import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import { useSliderValue } from '../Contexts/SliderValueContext';
import { AdditionalDiv, InnerContent, InnerDiv, NewDiv, SubDiv, SubDivText, Title } from './styles';

const Card3: React.FC = () => {
  const { sliderValue, clickedButtonInfo, clickedButtonIndex, selectedEmployee } = useSliderValue();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.push('/card2');
  };

  const handleLoanRequestClick = async () => {
    try {
      const loanData = {
        employeeId: selectedEmployee?.id,
        amount: sliderValue.toString().replace(',', '.'),
        installments: clickedButtonIndex, // Use the number of installments
      };

      await axios.post('http://localhost:3000/loans', loanData);

      history.push('/card4');
    } catch (error) {
      console.error('Error requesting loan:', error);
    }
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Pronto! Agora você já pode solicitar o empréstimo e recebê-lo na sua Conta Credifit! Veja o resumo da simulação!"
      titleBody="Resumo da simulação"
      button1Text="Voltar"
      onButton1Click={handleBackButtonClick} 
      button1Color="#057D88"
      button2Text="Solicitar empréstimo"
      onButton2Click={handleLoanRequestClick}
      button2Color="#fff"
    >
      <AdditionalDiv>
        <NewDiv>
          <InnerDiv>
            <InnerContent>
              <Title>Valor a Creditar</Title>
              <SubDiv>
                <SubDivText>R$ {sliderValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</SubDivText>
              </SubDiv>
            </InnerContent>
          </InnerDiv>
          <InnerDiv>
            <InnerContent>
              <Title>Valor a Financiar</Title>
              <SubDiv>
                <SubDivText>R$ {sliderValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</SubDivText>
              </SubDiv>
            </InnerContent>
          </InnerDiv>
        </NewDiv>
        <NewDiv>
          <InnerDiv className="full-width">
            <InnerContent>
              <Title>Parcelamento</Title>
              <SubDiv>
                <SubDivText>{clickedButtonInfo}</SubDivText>
              </SubDiv>
            </InnerContent>
          </InnerDiv>
        </NewDiv>
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card3;
