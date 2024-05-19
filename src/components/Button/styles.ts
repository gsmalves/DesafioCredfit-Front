// components/Button/styles.ts
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface ButtonContainerProps {
  buttonType: 'Primary' | 'Secondary';
  color?: string;
}

const typeStyles: Record<string, FlattenSimpleInterpolation> = {
  Primary: css`
    background-color: #057D88;
    border: none;
    color: white;
  `,
  Secondary: css`
    background-color: white;
    border: 2px solid #057D88;
    color: #057D88;
  `,
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 48px;
  padding: 0 16px;
  border-radius: 24px;
  opacity: 1;
  ${({ buttonType }) => typeStyles[buttonType]}
  color: ${({ color }) => color || 'inherit'};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
`;
