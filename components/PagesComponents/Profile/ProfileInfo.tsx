import React, {Attributes} from 'react';
import {Avatar, Box, Paper, Stack, Typography} from '@mui/material';
import {red} from '@mui/material/colors';
import { User } from 'parse';

interface IProfileInfoProps {
  currentUser: User
}

const ProfileInfo: React.FC<IProfileInfoProps> = ({currentUser}) => {
  return (
    <Paper elevation={6} sx={{borderRadius: '10px', padding: '2em', display: 'flex', gap: '2em'}}>
      <Avatar sx={{ bgcolor: red[500], width: '100px', height: '100px', alignSelf: 'flex-start' }}
              aria-label="Tony Stark">
        {currentUser.attributes.username[0]}
      </Avatar>
      <Box>
        <Typography gutterBottom sx={{fontSize: '2em'}}>
          {currentUser.attributes.username}
        </Typography>
        <Stack spacing={1}>
          <Typography variant='body1' sx={{fontSize: '0.8em'}}>
            <Typography variant='body2' sx={{fontSize: '1em'}}>Город: </Typography>
            Alabama
          </Typography>
          <Typography variant='body1' sx={{fontSize: '0.8em'}}>
            <Typography variant='body2' sx={{fontSize: '1em'}}>E-mail: </Typography>
            {currentUser.attributes.email}
          </Typography>
          <Typography variant='body1' sx={{fontSize: '0.8em'}}>
            <Typography variant='body2' sx={{fontSize: '1em'}}>Телефон: </Typography>
            +7 (999) 999-99-99
          </Typography>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ProfileInfo;