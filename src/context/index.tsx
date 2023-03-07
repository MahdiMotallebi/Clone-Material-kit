'use client';

import React, { createContext, useContext } from 'react';

//Mui
import { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { customeTheme, useMode } from '../theme/themeConfig';
import Direction from '../components/direction';

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
}
//initailState
const initialState: InitialState = {
  mode: 'dark',
  posts: [],
  showModal: false,
  updatedPost: { id: 1, userId: 1, title: '', body: '' },
  authInfo: { name: '', email: '' },
  dir: document.documentElement.dir
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
  );
};

export default ContextProvider;
