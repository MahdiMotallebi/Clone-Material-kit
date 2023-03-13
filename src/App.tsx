import React from 'react';
//style
// import './styles/global.scss';
//components
import SidebarLeft from './pages/global/SidebarLeft';
import ContextProvider from './context';
import GlobalStyle from './styles/globalStyle';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <SidebarLeft />
    </ContextProvider>
  );
};

export default App;
