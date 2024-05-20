// src/contexts/SliderValueContext.tsx
import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SliderValueContextProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  buttonInfo: { [key: string]: string };
  setButtonInfo: (info: { [key: string]: string }) => void;
}

const SliderValueContext = createContext<SliderValueContextProps | undefined>(undefined);

export const SliderValueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [buttonInfo, setButtonInfo] = useState<{ [key: string]: string }>({});

  return (
    <SliderValueContext.Provider value={{ sliderValue, setSliderValue, buttonInfo, setButtonInfo }}>
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


