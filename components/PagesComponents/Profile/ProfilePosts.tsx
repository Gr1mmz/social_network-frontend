import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
  return (
    <Box>
      <Typography variant='h2' gutterBottom sx={{fontSize: '1.5em'}}>
        Активность
      </Typography>
      <Stack spacing={2}>
        <ProfilePost/>
        <ProfilePost/>
        <ProfilePost/>
      </Stack>
    </Box>
  );
};

export default ProfilePosts;