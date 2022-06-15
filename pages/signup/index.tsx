import React, {useState} from 'react';
import Head from 'next/head';
import {NextPage} from 'next';
import SignupForm from '../../components/PagesComponents/LoginAndSignup/SignupForm';
import Layout from '../../components/PagesComponents/LoginAndSignup/Layout';
import {AlertColor} from '@mui/material';

const SignupPage: NextPage = () => {
  const [isAlertShown, setIsAlertShown] = useState(false);
  const [alertType, setAlertType] = useState<AlertColor | undefined>('success');
  const [errorCode, setErrorCode] = useState('');

  return (
    <div>
      <Head>
        <title>Зарегистрироваться</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Layout alert={isAlertShown} setAlert={setIsAlertShown} alertType={alertType} errorCode={errorCode}>
          <SignupForm setAlert={setIsAlertShown} setAlertType={setAlertType} setErrorCode={setErrorCode}/>
        </Layout>
      </main>
    </div>
  );
};

export default SignupPage;