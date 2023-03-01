import React from 'react';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import Box from '@mui/material/Box';
import { useGlobalContext } from '../context';

interface Props {
  children: React.ReactNode;
}

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin]
});

const cacheLtr = createCache({
  key: 'muiltr'
});

const Direction = ({ children }: Props) => {
  const { state } = useGlobalContext(); // get dir html

  return (
    <CacheProvider value={state.dir === 'rtl' ? cacheRtl : cacheLtr}>
      <Box sx={{ width: '100%' }} dir={state.dir}>
        {children}
      </Box>
    </CacheProvider>
  );
};

export default Direction;
