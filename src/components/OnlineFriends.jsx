import { Avatar, AvatarGroup } from '@mui/material';

const OnlineFriends = () => {
  return (
    <AvatarGroup max={7} total={24} sx={{ justifyContent: 'center' }}>
      <Avatar
        alt="Remy Sharp"
        src="https://material-ui.com/static/images/avatar/1.jpg"
      />
      <Avatar
        alt="Travis Howard"
        src="https://material-ui.com/static/images/avatar/2.jpg"
      />
      <Avatar
        alt="Agnes Walker"
        src="https://material-ui.com/static/images/avatar/4.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://material-ui.com/static/images/avatar/5.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://material-ui.com/static/images/avatar/6.jpg"
      />
      <Avatar
        alt="Trevor Henderson"
        src="https://material-ui.com/static/images/avatar/7.jpg"
      />
    </AvatarGroup>
  );
};

export default OnlineFriends;
