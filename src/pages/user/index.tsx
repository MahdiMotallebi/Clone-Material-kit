import React from 'react';
import axios from '../../utils/axiosinstance';

//Mui
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import {
  Box,
  useTheme,
  Paper,
  MenuItem,
  Tooltip,
  Button,
  Avatar,
  Stack
} from '@mui/material';
import { useDemoData } from '@mui/x-data-grid-generator';
import { tokens } from '../../theme/themeConfig';

//context
import { Post, useGlobalContext } from '../../context';

//icons
import { BsTrash, BsPencil, BsPlus } from 'react-icons/bs';

//components
import UpdatePost from '../../components/modal';
import Title from '../../components/chartTitle';
import Loading from '../../components/loading';

const User = () => {
  const { state, handleState } = useGlobalContext();
  const colors = tokens(state.mode);
  const theme = useTheme();
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6
  });

  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios('/posts');
      const allPosts: Post[] = await res.data;

      const tempState = { ...state, posts: allPosts };
      handleState(tempState);
    };

    fetchPosts();
  }, []);

  const handleRemovePost = async (id: number) => {
    try {
      const tempPosts = state.posts.filter((post) => post.id !== id);
      const tempState = { ...state, posts: tempPosts };
      handleState(tempState);
      const res = await axios.delete(`/posts/${id}`);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleUpdatePost = (post: Post) => {
    const tempState = {
      ...state,
      updatedPost: post,
      showModal: true
    };
    handleState(tempState);
  };
  const columns: GridColDef[] = [
    {
      field: '#',
      headerName: 'Row',
      width: 70,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box
            sx={{
              width: '100%'
            }}
          >
            {params.id}
          </Box>
        );
      }
    },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Avatar alt="Remy Sharp" src="/assets/images/avatars/avatar_3.jpg" />
        );
      }
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 200,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Box>{params.row.title.slice(0, 20).concat('...')}</Box>;
      }
    },
    {
      field: 'body',
      headerName: 'Body',
      width: 450,
      renderCell: (params: GridRenderCellParams<string>) => {
        return <Box>{params.row.body.slice(0, 60).concat('...')}</Box>;
      }
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title="Edit">
              <MenuItem
                sx={{ color: `${theme.palette.success.light}` }}
                onClick={() => handleUpdatePost(params.row)}
              >
                <BsPencil />
              </MenuItem>
            </Tooltip>
            <Tooltip title="Delete">
              <MenuItem
                sx={{ color: 'error.main' }}
                onClick={() => handleRemovePost(params.row.id)}
              >
                <BsTrash />
              </MenuItem>
            </Tooltip>
            {state.showModal && <UpdatePost />}
          </Box>
        );
      }
    }
  ];

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          my: '2rem'
        }}
      >
        <Box>
          <Title title="user" />
        </Box>
        <Box>
          <Button
            variant="contained"
            startIcon={<BsPlus />}
            sx={{ textTransform: 'capitalize' }}
          >
            new user
          </Button>
        </Box>
      </Box>
      {state.posts.length === 0 ? (
        <Loading />
      ) : (
        <Paper
          elevation={0}
          sx={{
            position: 'relative',
            border: `1px solid ${
              theme.palette.mode === 'light'
                ? theme.palette.border.main
                : theme.palette.border.dark
            }`,
            background: `${theme.palette.background.paper}`,
            borderRadius: '1rem',
            '& .MuiDataGrid-root': {
              border: 'none',
              '& .MuiDataGrid-cell': {
                borderBottom: `1px solid ${
                  theme.palette.mode === 'light'
                    ? theme.palette.border.main
                    : theme.palette.border.dark
                }`,
                '&:focus-within': {
                  outline: 'none'
                }
              },
              '& .MuiDataGrid-columnHeaders': {
                '&:focus-within': {
                  outline: 'none'
                }
              }
            },

            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${
                theme.palette.mode === 'light'
                  ? theme.palette.border.main
                  : theme.palette.border.dark
              }`
            },
            '& .MuiDataGrid-virtualScroller': {
              backgroundColor: `${
                theme.palette.mode === 'light'
                  ? colors.grey[900]
                  : colors.primary[500]
              }`
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: `1px solid ${
                theme.palette.mode === 'light'
                  ? theme.palette.border.main
                  : theme.palette.border.dark
              }`
            },
            '& .MuiCheckbox-root': {
              //   color: `${colors.info[500]} `
            }
          }}
        >
          <DataGrid
            autoHeight
            disableSelectionOnClick
            rows={state.posts}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 25]}
            rowHeight={70}
          />
        </Paper>
      )}
    </>
  );
};

export default User;
