import React from 'react';

//style
import './styles/global.scss';

//components
import SidebarLeft from './pages/global/SidebarLeft';
import ContextProvider from './context';

const App: React.FC = () => {
  return (
    <ContextProvider>
      <SidebarLeft />
    </ContextProvider>
  );
};

export default App;
