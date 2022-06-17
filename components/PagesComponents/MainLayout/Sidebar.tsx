import React, {useState} from 'react';
import NextLink from 'next/link';
import {useRouter} from 'next/router';
import Parse from 'parse';
import {Box, Button, Grid, Link, Paper, Stack} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import links from './sidebarLinksText';
import {doUserLogOut} from '../../../parse/functions';

interface ILink {
  id: number,
  title: string,
  url: string,
}

const Sidebar: React.FC<{}> = (): React.ReactElement => {
  const [currentUser, setCurrentUser] = useState<Parse.Object | undefined>();
  const router = useRouter();

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
          <Button variant='contained' startIcon={<LogoutIcon />}
                  onClick={() => doUserLogOut(setCurrentUser, router)}>
            Выйти
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Sidebar;