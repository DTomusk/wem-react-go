import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './i18n';
import ThemeRegistry from './components/organisms/ThemeRegistry.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeRegistry>
        <App />
      </ThemeRegistry>
    </BrowserRouter>
  </StrictMode>
);
