import React from 'react';

//mui
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  useTheme,
  alpha,
  Icon,
  Avatar,
  SvgIcon
} from '@mui/material';

//icons
import { BsEye, BsEyeFill, BsFillChatDotsFill, BsShare } from 'react-icons/bs';

//types
import { IndexProps } from '../types/types';

const BlogPost = ({ index }: IndexProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundImage: 'none',
        boxShadow: `${theme.palette.shadow}`,
        borderRadius: '15px'
      }}
    >
      <CardMedia
        image={`/assets/images/covers/cover_${index + 1}.jpg`}
        title="shoe"
        component="img"
      />
      <CardContent sx={{ position: 'relative' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '-1.25rem',
            left: '1rem',
            zIndex: '100'
          }}
          width="80px"
          height="35px"
        >
          <Box
            component="img"
            alt="shape-avatar"
            src={`${
              theme.palette.mode === 'light'
                ? '/assets/icons/shape-avatar.svg'
                : '/assets/icons/dark-shape-avatar.svg'
            }`}
            sx={{
              display: 'inline-block',
              width: '80px',
              height: '35px',
              color: 'red',
              backgroundImage:
                'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))'
            }}
          />
          <Avatar
            alt="Remy Sharp"
            src="/assets/images/avatars/avatar_default.jpg"
            sx={{
              width: 30,
              height: 30,
              margin: '0 auto',
              marginTop: '.3rem',
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              top: '0'
            }}
          />
        </Box>
        <Typography
          variant="subtitle2"
          component="span"
          sx={{
            color: `${theme.palette.text.secondary}`,
            display: 'inline-block',
            fontSize: '.7rem'
          }}
          mt={1}
        >
          21 Feb 2022
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          sx={{ textTransform: 'capitalize', fontWeight: '700' }}
        >
          fresh prince
        </Typography>
      </CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            color: `${theme.palette.text.secondary}`
          }}
          gap={1}
        >
          <Icon children={<BsFillChatDotsFill />} sx={{ fontSize: '.9rem' }} />
          <Typography sx={{ fontSize: '.9rem' }}>321k</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ color: `${theme.palette.text.secondary}` }}
          gap={1}
        >
          <Icon children={<BsEye />} sx={{ fontSize: '.9rem' }} />
          <Typography sx={{ fontSize: '.9rem' }}>233</Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default BlogPost;
