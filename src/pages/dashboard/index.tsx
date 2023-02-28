import React from 'react';
import axios from '../../utils/axiosinstance';

//Mui
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, useTheme, Paper, MenuItem, Tooltip } from '@mui/material';
import { tokens } from '../../theme/themeConfig';

//icons
import { BsTrash, BsPencil } from 'react-icons/bs';
import { Post, useGlobalContext } from '../../context';
import UpdatePost from '../../components/modal';
const Dashboard = () => {
  const { state, handleState } = useGlobalContext();
  React.useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios('/posts');
      const allPosts: Post[] = await res.data;
      const tempState = { ...state, posts: allPosts };
      handleState(tempState);
    };

    fetchPosts();
  }, []);

  const handleEditPost = async (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    post: Post
  ) => {
    e.stopPropagation();
    const { id, userId } = post;
  };

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
      headerName: '#',
      flex: 0.3,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'center'
            }}
          >
            {params.id}
          </Box>
        );
      }
    },
    {
      field: 'title',
      headerName: 'Title',
      flex: 0.8,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {params.row.title.slice(0, 15).concat('...')}
          </Box>
        );
      }
    },
    {
      field: 'body',
      headerName: 'Body',
      flex: 1,
      renderCell: (params: GridRenderCellParams<string>) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {params.row.body.slice(0, 50).concat('...')}
          </Box>
        );
      }
    },
    {
      field: 'action',
      headerName: '',
      flex: 0.5,
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
  const theme = useTheme();
  return (
    <Paper
      elevation={0}
      sx={{
        height: '95vh',
        border: `1px solid ${
          theme.palette.mode === 'light'
            ? theme.palette.border.main
            : theme.palette.border.dark
        }`,
        background: `${theme.palette.background['paper']}`,
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
          //   backgroundColor: colors.primary[400]
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
        disableSelectionOnClick
        rows={state.posts !== undefined ? state.posts : []}
        // rows={posts}
        columns={columns}
      />
    </Paper>
  );
};

export default Dashboard;
