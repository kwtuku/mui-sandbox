import { Stack, Typography } from '@mui/material';
import LatestConversations from './LatestConversations';
import LatestPosts from './LatestPosts';
import OnlineFriends from './OnlineFriends';

const Rightbar = () => {
  return (
    <Stack spacing={2}>
      <div>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Online Friends
        </Typography>
        <OnlineFriends />
      </div>

      <div>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Latest Posts
        </Typography>
        <LatestPosts />
      </div>

      <div>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
        >
          Latest Conversations
        </Typography>
        <LatestConversations />
      </div>
    </Stack>
  );
};

export default Rightbar;
