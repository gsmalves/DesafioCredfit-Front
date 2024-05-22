import { BrowserRouter } from 'react-router-dom';
import { SliderValueProvider } from './components/Contexts/SliderValueContext';
import { AppRoutes } from './routes';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
        <SliderValueProvider>
          <AppRoutes />
        </SliderValueProvider>
        <GlobalStyle />
    </BrowserRouter>
  );
}



