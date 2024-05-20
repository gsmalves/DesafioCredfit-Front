import { BrowserRouter } from 'react-router-dom';

import { SliderValueProvider } from './components/Contexts/SliderValueContext';
import { AuthProvider } from './hooks/AuthContext';
import { AppRoutes } from './routes';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
        <AuthProvider>

        </AuthProvider>
        <SliderValueProvider>
          <AppRoutes />
        </SliderValueProvider>
        <GlobalStyle />
    </BrowserRouter>
  );
}



