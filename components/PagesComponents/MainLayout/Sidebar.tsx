import React, {useState} from 'react';
import Parse from 'parse';
import {Box, Button, Grid, Link, Paper, Stack} from '@mui/material';
import NextLink from 'next/link';
import links from './sidebarLinksText';
import LogoutIcon from '@mui/icons-material/Logout';
import {useRouter} from 'next/router';

interface ILink {
  id: number,
  title: string,
  url: string,
}

const Sidebar: React.FC<{}> = (): React.ReactElement => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState<Parse.Object | undefined>();

  const getCurrentUser = async function (): Promise<Parse.User | undefined> {
    const currentUser: (Parse.User | undefined) = await Parse.User.current();
    // Update state variable holding current user
    if(currentUser) {
      setCurrentUser(currentUser);
      return currentUser;
    }
  };

  const doUserLogOut = async function (): Promise<boolean> {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      // @ts-ignore
      const currentUser: Parse.User = await Parse.User.current();
      if (currentUser === null || undefined) {
        console.log('Success! No user is logged in anymore!');
        router.push('/login');
      }
      // Update state variable holding current user
      await getCurrentUser();
      return true;
    } catch (error: any) {
      console.log(`Error! ${error.message}`);
      return false;
    }
  };

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
          <Button variant='contained' startIcon={<LogoutIcon />} onClick={() => doUserLogOut()}>
            Выйти
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Sidebar;