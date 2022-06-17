import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import ProfilePost from './ProfilePost';
import {User} from 'parse';

interface IProfilePostsProps {
  currentUser: User
}

const ProfilePosts: React.FC<IProfilePostsProps> = ({currentUser}) => {
  return (
    <Box>
      <Typography variant='h2' gutterBottom sx={{fontSize: '1.5em'}}>
        Активность
      </Typography>
      <Stack spacing={2}>
        <ProfilePost currentUser={currentUser}/>
        <ProfilePost currentUser={currentUser}/>
        <ProfilePost currentUser={currentUser}/>
      </Stack>
    </Box>
  );
};

export default ProfilePosts;