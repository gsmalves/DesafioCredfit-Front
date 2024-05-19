// components/Button/index.tsx
import React from 'react';
import { ButtonContainer, ButtonText } from './styles';

interface CustomButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  buttonType?: 'Primary' | 'Secondary';
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, children, buttonType = 'Primary', color }) => {
  return (
    <ButtonContainer onClick={onClick} buttonType={buttonType} color={color}>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
};

export default CustomButton;
