import React from 'react';
import axios from '../../utils/axiosinstance';

//Mui
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {
  Box,
  useTheme,
  Stack,
  Paper,
  MenuItem,
  Tooltip,
  IconButton,
  Typography,
  Card,
  alpha
} from '@mui/material';

import { styled } from '@mui/system';
import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';

//icons
import {
  BsAlarmFill,
  BsFillBarChartFill,
  BsFillInboxFill,
  BsFillCalendarCheckFill
} from 'react-icons/bs';

import { useGlobalContext } from '../../context';
import { tokens } from '../../theme/themeConfig';
import { LineColumnArea, PieChart } from '../../charts';
import Title from '../../components/chartTitle';
import { Helmet } from 'react-helmet-async';

const CustomCard = styled(Card)(({ theme }) => ({
  background: `${alpha(
    theme.palette.background.paper,
    theme.palette.mode === 'light' ? 1 : 1
  )}`,
  boxShadow: `${theme.palette.shadow}`,
  padding: '1.5rem',
  borderRadius: '10px'
}));

const CustomStack = styled(Stack)(({ theme }) => ({
  width: '100%',
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '15px',
  boxShadow: `${theme.palette.shadow}`
}));

const DashboardPage = () => {
  const { state } = useGlobalContext();
  const colors = tokens(state.mode);
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Dashboard Page | Mkit</title>
      </Helmet>

      <Box>
        <Typography
          component="h2"
          variant="h5"
          sx={{
            color: `${theme.palette.text.primary}`,
            fontWeight: '700',
            marginBottom: '2rem'
          }}
        >
          Hi,Welcome back
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="1rem"
          mb="1rem"
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <CustomStack
            sx={{
              background: `${
                theme.palette.mode === 'light'
                  ? colors.info[900]
                  : colors.info[800]
              }`
            }}
          >
            <IconButton
              sx={{
                width: '60px',
                height: '60px',
                backgroundImage:
                  'linear-gradient(135deg, rgba(16, 57, 255, .2) 0%, rgba(16, 57, 255, 0.3) 100%)',
                marginBottom: '1rem'
              }}
            >
              <BsAlarmFill />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ fontWeight: '700', color: `${theme.palette.info.dark}` }}
            >
              783k
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textTransform: 'capitalize',
                color: `${theme.palette.info.dark}`
              }}
            >
              weekly sales
            </Typography>
          </CustomStack>
          <CustomStack
            sx={{
              background: `${
                theme.palette.mode === 'light'
                  ? colors.success[900]
                  : colors.success[800]
              }`
            }}
          >
            <IconButton
              sx={{
                width: '60px',
                height: '60px',
                backgroundImage:
                  'linear-gradient(135deg, rgba(16, 200, 57, 0.2) 0%, rgba(16, 200, 57, 0.3) 100%)',
                marginBottom: '1rem'
              }}
            >
              <BsFillBarChartFill />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ fontWeight: '700', color: `${theme.palette.success.dark}` }}
            >
              1.2m
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textTransform: 'capitalize',
                color: `${theme.palette.success.dark}`
              }}
            >
              new users
            </Typography>
          </CustomStack>
          <CustomStack
            sx={{
              background: `${
                theme.palette.mode === 'light'
                  ? colors.warning[900]
                  : colors.warning[800]
              }`
            }}
          >
            <IconButton
              sx={{
                width: '60px',
                height: '60px',
                backgroundImage:
                  'linear-gradient(135deg, rgba(233, 222, 120, 0.2) 0%, rgba(221, 192, 64, 0.3) 100%)',
                marginBottom: '1rem'
              }}
            >
              <BsFillInboxFill />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ fontWeight: '700', color: `${theme.palette.warning.dark}` }}
            >
              233
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textTransform: 'capitalize',
                color: `${theme.palette.warning.dark}`
              }}
            >
              item orders
            </Typography>
          </CustomStack>
          <CustomStack
            sx={{
              background: `${
                theme.palette.mode === 'light'
                  ? colors.error[900]
                  : colors.error[800]
              }`
            }}
          >
            <IconButton
              sx={{
                width: '60px',
                height: '60px',
                backgroundImage:
                  'linear-gradient(135deg, rgba(250, 165, 165, 0.2) 0%,rgba(229, 64, 64, 0.3) 100%)',
                marginBottom: '1rem'
              }}
            >
              <BsFillCalendarCheckFill />
            </IconButton>
            <Typography
              variant="h4"
              sx={{ fontWeight: '700', color: `${theme.palette.error.dark}` }}
            >
              344
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textTransform: 'capitalize',
                color: `${theme.palette.error.dark}`
              }}
            >
              bug reports
            </Typography>
          </CustomStack>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: 'flex-strech',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          <CustomCard
            sx={{
              width: '100%',
              flex: '2'
            }}
          >
            <Title title="website visits" />
            <LineColumnArea />
          </CustomCard>
          <CustomCard
            sx={{
              width: '100%',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flex: '1',
              '& .apexcharts-legend': {
                display: 'flex',
                gap: '.5rem',
                borderTop: '1px solid #ccc',
                paddingTop: '1rem'
              }
            }}
          >
            <Title title="current visits" />
            <PieChart />
          </CustomCard>
        </Box>
        <Box
          display="flex"
          alignItems="stretch"
          gap="1rem"
          mt={5}
          sx={{
            flexDirection: { xs: 'column', md: 'row' }
          }}
        >
          <CustomCard
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              flex: '2'
            }}
          >
            <Title title="news updates" />
            {Array(5)
              .fill(0)
              .map(() => {
                return <NewUpdates />;
              })}
          </CustomCard>
          <CustomCard sx={{ flex: '1' }}>
            <Title title="order timeline" />
            <TimelineProject />
          </CustomCard>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;

const NewUpdates = () => {
  const theme = useTheme();
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Box display="flex" alignItems="center" gap="1rem">
        <Box
          component="img"
          src="/assets/images/covers/cover_1.jpg"
          width="70px"
          height="60px"
          borderRadius="10px"
        />
        <Stack>
          <Typography
            component="h3"
            variant="body1"
            sx={{
              textTransform: 'capitalize',
              color: `${theme.palette.text.primary}`,
              fontWeight: 'bold'
            }}
          >
            customer group coordinator
          </Typography>
          <Typography
            component="span"
            variant="body2"
            sx={{
              textTransform: 'capitalize',
              color: `${theme.palette.text.secondary}`
            }}
          >
            lead integration director
          </Typography>
        </Stack>
      </Box>
      <Typography
        component="span"
        variant="body2"
        sx={{
          textTransform: 'capitalize',
          color: `${theme.palette.text.secondary}`,
          fontSize: '.8rem'
        }}
      >
        about 19hours ago
      </Typography>
    </Box>
  );
};

const TimelineProject = () => {
  const theme = useTheme();

  return (
    <Timeline>
      {Array(5)
        .fill(0)
        .map(() => {
          return (
            <TimelineItem
              sx={{
                '&::before': {
                  content: 'none'
                }
              }}
            >
              <TimelineSeparator>
                <TimelineDot color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography
                  component="div"
                  variant="body2"
                  sx={{
                    color: `${theme.palette.text.primary}`,
                    fontWeight: 'bold'
                  }}
                >
                  1983, orders, $422
                </Typography>

                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: `${theme.palette.text.secondary}` }}
                >
                  16 Jan 2023 9:52 PM
                </Typography>
              </TimelineContent>
            </TimelineItem>
          );
        })}
    </Timeline>
  );
};
