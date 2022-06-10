import React from 'react';
import {Box} from '@mui/material';

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
      <Box sx={{
        bgcolor: 'background.paper',
        boxShadow: 0,
        width: '50%',
        minWidth: '320px',
        padding: '3em',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
      }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;