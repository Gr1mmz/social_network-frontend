import React from 'react';
import Head from 'next/head';
import {NextPage} from 'next';
import SignupForm from '../../components/PagesComponents/LoginAndSignup/SignupForm';
import Layout from '../../components/PagesComponents/LoginAndSignup/Layout';

const SignupPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Зарегистрироваться</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Layout>
          <SignupForm/>
        </Layout>
      </main>
    </div>
  );
};

export default SignupPage;