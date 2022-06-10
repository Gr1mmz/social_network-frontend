import React from 'react';
import {Avatar, Box, Grid, Paper, Typography} from '@mui/material';

const ProfileFriends = () => {
  return (
    <Box>
      <Typography variant='h2' gutterBottom sx={{fontSize: '1.5em'}}>
        Друзья
      </Typography>
      <Paper elevation={6} sx={{borderRadius: '10px', padding: '2em'}}>
        <Grid container sx={{gap: '5px'}}>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/2.jpg" />
          </Grid>
          <Grid item>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/3.jpg" />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProfileFriends;