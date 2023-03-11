import React from 'react';

//mui
import { Box, Typography, useTheme } from '@mui/material';

//types
import { ChartTitleProps } from '../types/types';

const Title = ({ title }: ChartTitleProps) => {
  const theme = useTheme();
  return (
    <Box width="100%">
      <Typography
        component="h3"
        variant="h6"
        sx={{
          color: `${theme.palette.text.primary}`,
          fontWeight: '700',
          textTransform: 'capitalize'
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
