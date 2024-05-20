// src/pages/Card2/index.tsx
import React from 'react';
import GenericCard from '../../components/GenericCard';
import { AdditionalDiv, InnerContent, InnerDiv, NewDiv, Title } from './styles';

const Card3: React.FC = () => {
  return (
    <GenericCard
      title="Crédito Consignado"
      text="Pronto! Agora você já pode solicitar o empréstimo e recebê-lo na sua Conta Credifit! Veja o resumo da simulação!"
      titleBody="Resumo da simulação"
      button1Text="Voltar"
      onButton1Click={() => console.log('Voltar clicado')}
      button1Color="#057D88"
      button2Text="Solicitar empréstimo"
      onButton2Click={() => console.log('Ação 2 clicada')}
      button2Color="#fff"
    >
      <AdditionalDiv>
        <NewDiv>
          <InnerDiv>
            <InnerContent>
              <Title>
                Valor a Creditar
              </Title>
            </InnerContent>
          </InnerDiv>
          <InnerDiv>
            <InnerContent>
              <Title>
              Valor a Financiar
              </Title>
            </InnerContent>
          </InnerDiv>
        </NewDiv>
        <NewDiv>
          <InnerDiv>
            <InnerContent>
              <Title>
                Parcelamento
              </Title>
            </InnerContent>
          </InnerDiv>
        </NewDiv>
      </AdditionalDiv>
    </GenericCard>
  );
};

export default Card3;
