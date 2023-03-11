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

const CustomCard = styled(Card)(({ theme }) => ({
  background: `${alpha(
    theme.palette.background.paper,
    theme.palette.mode === 'light' ? 1 : 1
  )}`,
  boxShadow:
    ' rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px',
  padding: '1.5rem',
  borderRadius: '10px'
}));

const Dashboard = () => {
  const { state } = useGlobalContext();
  const colors = tokens(state.mode);
  const theme = useTheme();
  // const { state, handleState } = useGlobalContext();

  // React.useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios('/posts');
  //     const allPosts: Post[] = await res.data;

  //     const tempState = { ...state, posts: allPosts };
  //     handleState(tempState);
  //   };

  //   fetchPosts();
  // }, []);

  // const handleRemovePost = async (id: number) => {
  //   try {
  //     const tempPosts = state.posts.filter((post) => post.id !== id);
  //     const tempState = { ...state, posts: tempPosts };
  //     handleState(tempState);
  //     const res = await axios.delete(`/posts/${id}`);
  //     console.log(res);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const handleUpdatePost = (post: Post) => {
  //   const tempState = {
  //     ...state,
  //     updatedPost: post,
  //     showModal: true
  //   };
  //   handleState(tempState);
  // };
  // const columns: GridColDef[] = [
  //   {
  //     field: '#',
  //     headerName: '#',
  //     width: 90,
  //     renderCell: (params: GridRenderCellParams<string>) => {
  //       return (
  //         <Box
  //           sx={{
  //             display: 'flex',
  //             alignItems: 'center',
  //             width: '100%',
  //             justifyContent: 'center'
  //           }}
  //         >
  //           {params.id}
  //         </Box>
  //       );
  //     }
  //   },
  //   {
  //     field: 'title',
  //     headerName: 'Title',
  //     width: 200,
  //     renderCell: (params: GridRenderCellParams<string>) => {
  //       return <Box>{params.row.title.slice(0, 20).concat('...')}</Box>;
  //     }
  //   },
  //   {
  //     field: 'body',
  //     headerName: 'Body',
  //     width: 500,
  //     renderCell: (params: GridRenderCellParams<string>) => {
  //       return <Box>{params.row.body.slice(0, 70).concat('...')}</Box>;
  //     }
  //   },
  //   {
  //     field: 'action',
  //     headerName: '',
  //     width: 200,
  //     renderCell: (params: GridRenderCellParams<string>) => {
  //       return (
  //         <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //           <Tooltip title="Edit">
  //             <MenuItem
  //               sx={{ color: `${theme.palette.success.light}` }}
  //               onClick={() => handleUpdatePost(params.row)}
  //             >
  //               <BsPencil />
  //             </MenuItem>
  //           </Tooltip>
  //           <Tooltip title="Delete">
  //             <MenuItem
  //               sx={{ color: 'error.main' }}
  //               onClick={() => handleRemovePost(params.row.id)}
  //             >
  //               <BsTrash />
  //             </MenuItem>
  //           </Tooltip>
  //           {state.showModal && <UpdatePost />}
  //         </Box>
  //       );
  //     }
  //   }
  // ];
  // const theme = useTheme();
  // return (
  //   <Paper
  //     elevation={0}
  //     sx={{
  //       height: '95vh',
  //       position: 'relative',
  //       border: `1px solid ${
  //         theme.palette.mode === 'light'
  //           ? theme.palette.border.main
  //           : theme.palette.border.dark
  //       }`,
  //       background: `${theme.palette.background['paper']}`,
  //       borderRadius: '1rem',
  //       '& .MuiDataGrid-root': {
  //         border: 'none',
  //         '& .MuiDataGrid-cell': {
  //           borderBottom: `1px solid ${
  //             theme.palette.mode === 'light'
  //               ? theme.palette.border.main
  //               : theme.palette.border.dark
  //           }`,
  //           '&:focus-within': {
  //             outline: 'none'
  //           }
  //         },
  //         '& .MuiDataGrid-columnHeaders': {
  //           '&:focus-within': {
  //             outline: 'none'
  //           }
  //         }
  //       },

  //       '& .MuiDataGrid-columnHeaders': {
  //         borderBottom: `1px solid ${
  //           theme.palette.mode === 'light'
  //             ? theme.palette.border.main
  //             : theme.palette.border.dark
  //         }`
  //       },
  //       '& .MuiDataGrid-virtualScroller': {
  //         // backgroundColor: colors.primary[400]
  //       },
  //       '& .MuiDataGrid-footerContainer': {
  //         borderTop: `1px solid ${
  //           theme.palette.mode === 'light'
  //             ? theme.palette.border.main
  //             : theme.palette.border.dark
  //         }`
  //       },
  //       '& .MuiCheckbox-root': {
  //         //   color: `${colors.info[500]} `
  //       }
  //     }}
  //   >
  //     <DataGrid
  //       disableSelectionOnClick
  //       rows={state.posts !== undefined ? state.posts : []}
  //       columns={columns}
  //     />
  //   </Paper>
  // );

  return (
    <>
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
        <Stack
          sx={{
            background: `#e0e2ff`,
            width: '100%',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px'
          }}
        >
          <IconButton
            sx={{
              width: '60px',
              height: '60px',
              backgroundImage:
                'linear-gradient(135deg, rgba(16, 57, 150, 0) 0%, rgba(16, 57, 150, 0.24) 100%)',
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
        </Stack>
        <Stack
          sx={{
            background: `#e5f5d2`,
            width: '100%',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px'
          }}
        >
          <IconButton
            sx={{
              width: '60px',
              height: '60px',
              backgroundImage:
                'linear-gradient(135deg, rgba(16, 57, 150, 0) 0%, rgba(16, 57, 150, 0.24) 100%)',
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
        </Stack>
        <Stack
          sx={{
            background: `#fff6cc`,
            width: '100%',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px'
          }}
        >
          <IconButton
            sx={{
              width: '60px',
              height: '60px',
              backgroundImage:
                'linear-gradient(135deg, #ffe3b0 0%, #e7be70 100%)',
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
        </Stack>
        <Stack
          sx={{
            background: '#f8dcdb',
            width: '100%',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '15px'
          }}
        >
          <IconButton
            sx={{
              width: '60px',
              height: '60px',
              backgroundImage:
                'linear-gradient(135deg, #faadad 0%, #eb9191 100%)',
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
        </Stack>
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
    </>
  );
};

export default Dashboard;

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
