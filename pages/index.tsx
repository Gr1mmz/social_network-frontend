import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import type { NextPage } from 'next';
import Parse from 'parse';
import {Grid} from '@mui/material';
import ProfileInfo from '../components/PagesComponents/Profile/ProfileInfo';
import MainLayout from '../components/PagesComponents/MainLayout/MainLayout';
import ProfilePosts from '../components/PagesComponents/Profile/ProfilePosts';
import ProfileFriends from '../components/PagesComponents/Profile/ProfileFriends';
import {checkCurrentUser} from '../parse/functions';

const Home: NextPage = () => {
  const [currentUser, setCurrentUser] = useState<Parse.User | null>(null);
  const router = useRouter();

  useEffect(() => {
    checkCurrentUser(currentUser, setCurrentUser, router);
  }, []);
  return (
    <div>
      <Head>
        <title>SocialApes</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {currentUser && (
          <MainLayout>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
                <Grid container justifyContent='center'>
                  <Grid item xs={12} xl={8} >
                    <ProfileInfo currentUser={currentUser}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={{ xs: 1, sm: 2, md: 3 }} justifyContent='center' >
                  <Grid item xs={8} xl={5}>
                    <ProfilePosts currentUser={currentUser}/>
                  </Grid>
                  <Grid item xs={4} xl={3}>
                    <ProfileFriends/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </MainLayout>
        )}
      </main>
    </div>
  );
};

export default Home;
