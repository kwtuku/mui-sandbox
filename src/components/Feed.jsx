import { Stack } from '@mui/material';
import Post from './Post';

const Feed = () => {
  return (
    <Stack spacing={2}>
      {[...Array(5)]
        .map((_, i) => i)
        .map((i) => {
          return <Post key={i} />;
        })}
    </Stack>
  );
};

export default Feed;
