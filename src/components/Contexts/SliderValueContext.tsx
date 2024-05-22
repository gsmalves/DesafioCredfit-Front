import React, { ReactNode, createContext, useContext, useState } from 'react';

export interface Employee {  
  id: number;
  fullName: string;
  companyId: number;
}

interface SliderValueContextProps {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  clickedButtonInfo: string;
  setClickedButtonInfo: (info: string) => void;
  clickedButtonIndex: number;
  setClickedButtonIndex: (index: number) => void;
  selectedEmployee: Employee | null;
  setSelectedEmployee: (employee: Employee) => void;
}

const SliderValueContext = createContext<SliderValueContextProps | undefined>(undefined);

export const SliderValueProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sliderValue, setSliderValue] = useState<number>(0);
  const [clickedButtonInfo, setClickedButtonInfo] = useState<string>('');
  const [clickedButtonIndex, setClickedButtonIndex] = useState<number>(0);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  return (
    <SliderValueContext.Provider
      value={{
        sliderValue,
        setSliderValue,
        clickedButtonInfo,
        setClickedButtonInfo,
        clickedButtonIndex,
        setClickedButtonIndex,
        selectedEmployee,
        setSelectedEmployee,
      }}
    >
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