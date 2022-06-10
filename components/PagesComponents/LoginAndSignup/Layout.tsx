import React from 'react';
import {Box, Paper} from '@mui/material';

interface ILoginProps {
  children: React.ReactElement
}

const Layout: React.FC<ILoginProps> = ({children}) => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        width: '100%',
        height: '100vh',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Социальная сеть нового поколения
      </Box>
      <Paper elevation={6} sx={{
        width: '50%',
        minWidth: '320px',
        padding: '3em',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      }}>
        {children}
      </Paper>
    </Box>
  );
};

export default Layout;