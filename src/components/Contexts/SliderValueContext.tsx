import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SliderValueContextProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  clickedButtonInfo: string; // Adiciona a informação do botão clicado
  setClickedButtonInfo: (info: string) => void; // Adiciona a função para definir a informação do botão clicado
}

const SliderValueContext = createContext<SliderValueContextProps | undefined>(undefined);

export const SliderValueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [clickedButtonInfo, setClickedButtonInfo] = useState<string>(''); // Inicializa com uma string vazia

  return (
    <SliderValueContext.Provider value={{ sliderValue, setSliderValue, clickedButtonInfo, setClickedButtonInfo }}>
      {children}
    </SliderValueContext.Provider>
  );
};

export const useSliderValue = () => {
  const context = useContext(SliderValueContext);
  if (!context) {
    throw new Error('useSliderValue must be used within a SliderValueProvider');
  }
  return context;
};
