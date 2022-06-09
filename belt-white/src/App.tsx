import * as React from 'react';

import { createRoot } from 'react-dom/client';

import createTheme from '@eduzz/houston-styles/createTheme';
import ThemeProvider from '@eduzz/houston-ui/ThemeProvider';

import { Routes } from './routes';

const theme = createTheme({
  primary: {
    pure: '#0D47A1',
    light: '#9EB5D9',
    medium: '#265AAB',
    dark: '#072D83'
  }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>
);

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);
root.render(<App />);
