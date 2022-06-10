import React from 'react';
import {Box, Button, Grid, Link, Paper, Stack} from '@mui/material';
import NextLink from 'next/link';
import links from './sidebarLinksText';
import LogoutIcon from '@mui/icons-material/Logout';

interface ILink {
  id: number,
  title: string,
  url: string,
}

const Sidebar = () => {
  return (
    <Grid item sx={{position: 'sticky', alignSelf: 'start', top: '1em', height: 'calc(100vh - 33px)'}}>
      <Paper elevation={6}
             sx={{
               width: '100%',
               minWidth: '250px',
               height: '100%',
               padding: '2em',
               borderTopRightRadius: '10px',
               borderBottomRightRadius: '10px',
             }}>
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
          <Stack spacing={2}>
            {links.map((link: ILink) => (
              <NextLink href={link.url} key={link.id} passHref>
                <Link underline='none'
                      sx={{
                        color: '#fff',
                        ':hover': {
                          color: 'secondary.main'
                        }
                      }}
                >
                  {link.title}
                </Link>
              </NextLink>
            ))}
          </Stack>
          <Button variant='contained' startIcon={<LogoutIcon />}>
            Выйти
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Sidebar;