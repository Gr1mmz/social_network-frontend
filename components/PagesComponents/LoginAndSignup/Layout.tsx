import React, {Dispatch, SetStateAction} from 'react';
import Image from 'next/image';
import {Box, Paper, Typography} from '@mui/material';
import type {AlertColor} from '@mui/material/Alert';
import CustomAlert from '../../OtherComponents/Alert/CustomAlert';
import monkey from './monkey.svg';
import logo from './logo.png';

interface ILoginProps {
  children: React.ReactElement,
  alert?: boolean,
  setAlert?: Dispatch<SetStateAction<boolean>>,
  alertType?: AlertColor | undefined,
  errorCode?: PropertyKey
}

const Layout: React.FC<ILoginProps> = (
  {
    children,
    alert,
    setAlert,
    alertType,
    errorCode
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        <Box sx={{position: 'absolute', height: '100vh', width: '100%', left: '-50%'}}>
          <Image src={monkey} layout='fill'/>
        </Box>
        <Box sx={{
          position: 'relative',
          zIndex: '10',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Box>
            <Image src={logo}/>
          </Box>
          <Typography variant='h5' component='h1'>
            Социальная сеть нового поколения
          </Typography>
        </Box>
      </Box>
      <Paper elevation={6} sx={{
        width: '50%',
        minWidth: '320px',
        padding: '3em',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
      }}>
        {children}
      </Paper>
      {alert && setAlert && <CustomAlert type={alertType}
                                         handleClick={() => setAlert(false)}
                                         errorCode={errorCode}/>
      }
    </Box>
  );
};

export default Layout;