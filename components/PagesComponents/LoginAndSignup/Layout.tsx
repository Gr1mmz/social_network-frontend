import React, {Dispatch, SetStateAction} from 'react';
import {Box, Paper} from '@mui/material';
import type {AlertColor} from '@mui/material/Alert';
import CustomAlert from '../../OtherComponents/Alert/CustomAlert';

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
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        Социальная сеть нового поколения
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