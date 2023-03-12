import * as React from 'react';

//Mui
import {
  alpha,
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { Post, useGlobalContext } from '../context';
import axios from '../utils/axiosinstance';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '90%',
    md: '60%'
  },
  borderRadius: '1rem',
  bgcolor: 'background.paper',
  p: 4
};

const UpdatePost = () => {
  const { state, handleState } = useGlobalContext();
  const theme = useTheme();
  const [title, setTitle] = React.useState<string>(state.updatedPost.title);
  const [body, setBody] = React.useState<string>(state.updatedPost.body);

  const handleCloseModal = () => {
    const tempState = { ...state, showModal: false };
    handleState(tempState);
  };

  const handleUpdatePost = async () => {
    const tempPost: Post[] = state.posts.map((post) => {
      if (post.id === state.updatedPost.id) {
        return { ...post, title, body };
      }
      return post;
    });
    handleState({ ...state, posts: tempPost, showModal: false });
    const res = await axios.put(`/posts/${state.updatedPost.id}`, {
      id: state.updatedPost.id,
      title,
      body,
      userId: state.updatedPost?.userId
    });
    const updatedPost = await res.data;
  };
  return (
    <div>
      <Modal open={state.showModal} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography
            variant="h5"
            component="h5"
            mb={5}
            sx={{
              textTransform: 'capitalize',
              fontWeight: '700',
              color: `${theme.palette.text.primary}`
            }}
          >
            update post
          </Typography>

          <Stack spacing={3}>
            <TextField
              name="title"
              label="Title"
              value={title}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setTitle(e.target.value)}
            />

            <TextField
              name="body"
              label="Body"
              value={body}
              onChange={(
                e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
              ) => setBody(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ textTransform: 'capitalize', width: '2rem' }}
              onClick={handleUpdatePost}
            >
              update
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default UpdatePost;
