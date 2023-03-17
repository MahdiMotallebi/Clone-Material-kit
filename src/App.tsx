import React from 'react';

//components
import ContextProvider from './context';
import AppRoutes from './routes/indext';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <AppRoutes />
    </ContextProvider>
  );
};

export default App;
