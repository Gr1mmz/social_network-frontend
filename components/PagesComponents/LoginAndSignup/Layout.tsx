import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Alert, AlertColor, Box, Link, Paper} from '@mui/material';
import NextLink from 'next/link';
import CustomAlert from '../../OtherComponents/Alert/CustomAlert';

interface ILoginProps {
  children: React.ReactElement,
  alert: boolean,
  setAlert: Dispatch<SetStateAction<boolean>>,
  alertType: AlertColor | undefined
}

const Layout: React.FC<ILoginProps> = (
  {
    children,
    alert,
    setAlert,
    alertType
  }) => {

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
      {alert ? <CustomAlert type={alertType} handleClick={() => setAlert(true)}/> : null}
    </Box>
  );
};

export default Layout;