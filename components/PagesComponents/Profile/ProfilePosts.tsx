import React from 'react';
import {Box, Button, Card, Stack, TextField, Typography} from '@mui/material';
import ProfilePost from './ProfilePost';
import {User} from 'parse';

interface IProfilePostsProps {
  currentUser: User;
  isOwner: boolean | ((prevState: boolean) => boolean)
}

const ProfilePosts: React.FC<IProfilePostsProps> = ({currentUser, isOwner}) => {
  return (
    <Box>
      <Typography variant='h2' gutterBottom sx={{fontSize: '1.5em'}}>
        Активность
      </Typography>
      <Stack spacing={2}>
        {isOwner
          ? (
            <Card sx={{padding: '1em'}}>
              <Stack spacing={1}>
                <TextField label="Расскажите, что у вас нового" multiline rows={3} fullWidth variant='filled'
                           sx={{
                             '& label': {
                               top: 'unset',
                               left: 'unset'
                             }
                           }}
                />
                <Button variant="contained" sx={{alignSelf: 'flex-end'}}>Отправить</Button>
              </Stack>
            </Card>
          )
          : null
        }
        <ProfilePost currentUser={currentUser}/>
        <ProfilePost currentUser={currentUser}/>
        <ProfilePost currentUser={currentUser}/>
      </Stack>
    </Box>
  );
};

export default ProfilePosts;