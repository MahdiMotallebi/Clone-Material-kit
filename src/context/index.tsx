'use client';

import React, { createContext, useContext } from 'react';

//Mui
import { PaletteMode } from '@mui/material';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { customeTheme, useMode } from '../theme/themeConfig';
import Direction from '../components/direction';
import { HelmetProvider } from 'react-helmet-async';

//Types
interface ProviderTypes {
  children?: JSX.Element | Array<JSX.Element>;
}
interface GlobalContextType {
  state: InitialState;
  handleState: (s: InitialState) => void;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface AuthInfo {
  name: string;
  email: string;
}

interface InitialState {
  mode: PaletteMode;
  posts: Post[];
  showModal: boolean;
  updatedPost: Post;
  authInfo: AuthInfo;
  dir: string;
  openDrawer: boolean;
}
//initailState
const initialState: InitialState = {
  mode: 'light',
  posts: [],
  showModal: false,
  updatedPost: { id: 1, userId: 1, title: '', body: '' },
  authInfo: { name: '', email: '' },
  dir: document.documentElement.dir,
  openDrawer: false
};

//create context
const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  handleState: () => {}
});

//custom hook useContext
export const useGlobalContext = () => useContext(GlobalContext);

//contextProvider & themeProvider
const ContextProvider = ({ children }: ProviderTypes) => {
  const [state, setState] = React.useState(initialState);

  const handleState = (s: InitialState) => {
    setState(s);
  };

  const { theme } = useMode(state.mode);

  return (
    <HelmetProvider>
      <GlobalContext.Provider
        value={{
          state,
          handleState
        }}
      >
        <Direction>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </Direction>
      </GlobalContext.Provider>
    </HelmetProvider>
  );
};

export default ContextProvider;
