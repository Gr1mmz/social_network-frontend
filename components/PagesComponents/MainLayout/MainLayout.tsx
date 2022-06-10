import React from 'react';
import {Grid} from '@mui/material';
import Sidebar from './Sidebar';

interface IMainLayoutProps {
  children: React.ReactElement
}

const MainLayout: React.FC<IMainLayoutProps> = ({children}) => {
  return (
    <Grid container direction='row' columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          sx={{minHeight: '100vh', padding: '1em 1em 1em 0', position: 'relative'}}>
      <Sidebar/>
      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  );
};

export default MainLayout;