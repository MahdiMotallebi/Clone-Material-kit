import * as React from 'react';
import GlobalStyles from '@mui/material/GlobalStyles';
import { CssBaseline } from '@mui/material';

export const GlobalStyle = () => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={() => ({
          //Global
          html: {
            scrollBehavior: 'smooth'
          },
          body: {
            fontSize: '10px',
            overflowX: 'hidden',
            width: '100%',
            height: '100vh',
            fontFamily: 'Titillium Web,sans-serif'
          },

          'ul, ol': {
            listStyle: 'none'
          },
          img: {
            objectFit: 'cover',
            maxWidth: '100%',
            display: 'block',
            height: '400'
          },
          table: {
            borderCollapse: 'collapse'
          },
          textarea: {
            whiteSpace: 'revert'
          },

          //Scroll
          '*::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
          },

          '*::-webkit-scrollbar-track': {
            background: 'transparent'
          },

          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '0.5rem'
          },
          '::-webkit-scrollbar-thumb:hover': {
            background: '#555'
          },

          //Modal
          '.MuiModal-root .MuiModal-backdrop': {
            background: 'rgba(0, 0, 0, 0.08)'
          },

          //Chart
          '.tooltipWebsiteVisit': {
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(10px)',
            borderRadius: '10px',
            padding: '0.5rem',
            fontFamily: 'nunito',
            color: '#555',
            '.apexcharts-tooltip-text-y-label': {
              fontSize: '0.7rem'
            },

            '.apexcharts-tooltip-text-y-value': {
              fontWeight: '700',
              fontSize: '0.8rem'
            }
          },

          '.apexcharts-xaxistooltip-bottom': {
            backgroundColor: 'rgba(255, 255, 255, 0.3) !important',
            backdropFilter: 'blur(3px)',
            border: '1px solid rgba(0, 0, 0, 0.08) !important',
            borderRadius: '10px !important'
          },

          '.pieTooltip': {
            backgroundColor: 'rgba(0 0 0 / 0.7)',
            backdropFilter: 'blur(0.3px)',
            color: '#fff'
          },

          '.apexcharts-legend-series': {
            textTransform: 'capitalize'
          },

          //Loading
          '.loading': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          },

          '.loading div ': {
            background: '#fff',
            width: '20px',
            height: '20px',
            borderRadius: '50%'
          },

          '.c1': {
            opacity: 0,
            transform: 'translate(-30px)',
            animation: 'load-1 0.5s linear infinite'
          },

          '@keyframes load-1': {
            '100%': {
              opacity: 1,
              transform: 'translate(30px)'
            }
          },

          '.c2,.c3 ': {
            animation: 'load 0.5s linear infinite'
          },

          '@keyframes load': {
            '100%': {
              transform: 'translate(30px)'
            }
          },

          '.c4': {
            animation: 'load-6 0.5s linear infinite'
          },

          '@keyframes load-6': {
            '100%': {
              opacity: 0,
              transform: 'translate(60px)'
            }
          }
        })}
      />
    </>
  );
};

export default GlobalStyle;
