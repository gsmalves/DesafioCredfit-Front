import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/AuthContext';
import { AppRoutes } from './routes';
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
        <AuthProvider>

        </AuthProvider>
          <AppRoutes />
        <GlobalStyle />
    </BrowserRouter>
  );
}

