import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericCard from '../../components/GenericCard';
import { useSliderValue } from '../Contexts/SliderValueContext';
import { AdditionalDiv, SliderContainer, StyledSlider, ValueContainer, ValueText } from './styles';

const Card: React.FC = () => {
  const history = useHistory();
  const { sliderValue, setSliderValue, selectedEmployee } = useSliderValue();
  const [companyName, setCompanyName] = useState<string>('');

  useEffect(() => {
    const fetchCompanyName = async (employeeId: number) => {
      try {
        const response = await axios.get(`http://localhost:3000/employees/${employeeId}`);
        setCompanyName(response.data.companyId.businessName); // Acessa companyId primeiro e depois businessName
      } catch (error) {
        console.error('Error fetching company name:', error);
        setCompanyName('Empresa X'); 
      }
    };
    
    if (selectedEmployee) {
      fetchCompanyName(selectedEmployee.id); //SelectedEmployee.id para obter o ID do funcionário selecionado
    }
  }, [selectedEmployee]);
  

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const handlePrimaryButtonClick = () => {
    history.push('/');
  };

  const handleSecondaryButtonClick = () => {
    history.push('/card2');
  };

  return (
    <GenericCard
      title="Crédito Consignado"
      text={`Você possui saldo para Crédito Consignado pela empresa ${companyName}. Faça uma simulação. Indique quanto você precisa:`}
      titleBody="Simular empréstimo"
      button1Text="Voltar"
      onButton1Click={handlePrimaryButtonClick}
      button1Color="#057D88"
      button2Text="Simular Empréstimo"
      onButton2Click={handleSecondaryButtonClick}
      button2Color="#ffffff"
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
