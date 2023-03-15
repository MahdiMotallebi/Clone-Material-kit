import * as React from 'react';

//mui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
  alpha
} from '@mui/material';

//types
import { CardProductProps } from '../types/types';

const CardProduct = ({ index }: CardProductProps) => {
  const theme = useTheme();
  return (
    <Card>
      <CardMedia
        image={`assets/images/products/product_${index + 1}.jpg`}
        title="shoe"
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Nike Space Hippie 04
        </Typography>
      </CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Button
          size="small"
          sx={{
            background: `${alpha(theme.palette.primary.main, 0.1)}`,
            p: 1,
            fontSize: '.7rem'
          }}
        >
          add to cart
        </Button>
        <Button
          size="small"
          sx={{ color: `${theme.palette.text.primary}`, fontWeight: 'bold' }}
        >
          $37.3
        </Button>
      </Box>
    </Card>
  );
};

export default CardProduct;
