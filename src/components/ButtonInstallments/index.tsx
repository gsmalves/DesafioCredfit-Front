import React from 'react';
import styled from 'styled-components';

// Estilizando o wrapper do botão
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

// Estilizando o botão
const Button = styled.button`
  width: 220px; /* O botão deve ocupar todo o espaço do wrapper */
  height: 30px;
  padding: 0; /* Remova o preenchimento para controlar o tamanho do botão apenas pelo wrapper */
  border: none;
  background-color:  #FAFAFA; /* Cor de fundo transparente */
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px; /* Centralize verticalmente o texto */
  text-align: left;
  color: #000; /* Cor do texto */
  display: flex; /* Para permitir que os textos fiquem dentro do botão */
  align-items: center; /* Centralize os itens verticalmente dentro do botão */

    transition: background-color 0.3s; /* Adicionando uma transição suave */

  &:active {
    background-color: #FFD899; /* Cor de fundo ao ser clicado */
  }
`;

// Estilizando o retângulo ao lado do botão
const Rectangle = styled.div`
  width: 8px;
  height: 30px;
  background: #E66900;
  border-radius: 8px; /* Aplicando border-radius ao retângulo */
`;


const Text = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  font-weight: 400;
  line-height: 26.6px;
  text-align: left;

  color: #535F5F;
; /* Cor do texto */
  width: 51px;
  height: 27px;
  gap: 0px;
`;

// Estilizando o texto dentro do botão
const ButtonText = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 600;
  line-height: 31.92px;
  text-align: left;

  color: #057D88; /* Cor do texto */
  width: 117px;
  height: 32px;
  gap: 0px;
`;

interface ButtonInstallmentsProps {
  text: string;
  buttonText: string;
  onClick: () => void;
}

const ButtonInstallments: React.FC<ButtonInstallmentsProps> = ({ text, buttonText, onClick }) => {
  return (
    <ButtonWrapper>
      <Rectangle />
      <Button onClick={onClick}>
        <Text>{text}</Text>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </ButtonWrapper>
  );
};

export default ButtonInstallments;
