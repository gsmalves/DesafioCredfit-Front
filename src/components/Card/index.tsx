import React from 'react';
import { useHistory } from 'react-router-dom'; // Importação correta para react-router-dom v5
import arrowChevron from '../../assets/ArrowChevron.svg';
import { BackIcon, CardBody, CardContainer, CardHeader, Title } from './styles';

const Card: React.FC = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.push('/'); // Navigate to home
  };

  return (

    <CardContainer>
      <CardHeader>
        <BackIcon src={arrowChevron} alt="Back" onClick={handleBackClick} />
        <Title>Crédito Consignado</Title>
      </CardHeader>
      <CardBody>
        {/* Conteúdo do card */}
      </CardBody>
    </CardContainer>
  );
};

export default Card;
