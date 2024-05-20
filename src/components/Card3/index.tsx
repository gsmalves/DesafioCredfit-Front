import React from 'react';
import { useHistory } from 'react-router-dom'; // Importe o useHistory para realizar o redirecionamento
import { useSliderValue } from '../../components/Contexts/SliderValueContext'; // Importe o hook useSliderValue
import GenericCard from '../../components/GenericCard';
import { AdditionalDiv, InnerContent, InnerDiv, NewDiv, SubDiv, SubDivText, Title } from './styles';

const Card3: React.FC = () => {
  const { sliderValue, clickedButtonInfo } = useSliderValue(); // Use o hook useSliderValue para obter o valor do slider do contexto
  const history = useHistory(); // Inicialize o useHistory para realizar o redirecionamento

  // Função para lidar com o clique no botão "Voltar"
  const handleBackButtonClick = () => {
    history.push('/card2'); // Redireciona para a rota "/card2" ao clicar em "Voltar"
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text="Pronto! Agora você já pode solicitar o empréstimo e recebê-lo na sua Conta Credifit! Veja o resumo da simulação!"
      titleBody="Resumo da simulação"
      button1Text="Voltar"
      onButton1Click={handleBackButtonClick} // Chama a função handleBackButtonClick ao clicar em "Voltar"
      button1Color="#057D88"
      button2Text="Solicitar empréstimo"
      onButton2Click={() => console.log('Ação 2 clicada')}
      button2Color="#fff"
    >
      <AdditionalDiv>
        <NewDiv>
          <InnerDiv>
            <InnerContent>
              <Title>Valor a Creditar</Title>
              <SubDiv>
                {/* Use o valor do slider do contexto dentro da SubDivText e formate com vírgula */}
                <SubDivText>R$ {sliderValue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</SubDivText>
              </SubDiv>
            </InnerContent>
          </InnerDiv>
          <InnerDiv>
            <InnerContent>
              <Title>Valor a Financiar</Title>
              <SubDiv>
                {/* Mesmo valor do slider */}
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
                {/* Use o valor de parcelamento do contexto */}
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
