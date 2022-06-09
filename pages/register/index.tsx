import React from 'react';
import Head from "next/head";
import {Box, Button, Link, Stack, TextField, Typography} from "@mui/material";
import {Formik} from "formik";
import NextLink from "next/link";
import * as yup from "yup";
import {NextPage} from "next";

const RegisterPage: NextPage = () => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    email: yup.string().email('Введите e-mail в формате mail@mail.ru'),
    password: yup.string().required('Обязательное поле'),
  });
  return (
    <div>
      <Head>
        <title>Зарегистрироваться</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
          <Box sx={{
            bgcolor: 'background.paper',
            width: '50%',
            minWidth: '320px',
            padding: '3em',
            borderTopLeftRadius: '20px',
            borderBottomLeftRadius: '20px',
          }}>
            <Formik validateOnBlur validationSchema={validationSchema}
                    initialValues={{
                      username: '',
                      email: '',
                      password: ''
                    }}
                    onSubmit={(values, actions) => {
                      console.log(values)
                    }}>
              {({values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit}) => (
                <Box component='form' onSubmit={handleSubmit}>
                  <Typography variant='h2' gutterBottom
                              sx={{
                                fontSize: '2em',
                                textAlign: 'center'
                              }}>
                    Регистрация
                  </Typography>
                  <Stack spacing={2} sx={{margin: '2em 0'}}>
                    <TextField id='username' label='Имя пользователя' variant='filled' />
                    <TextField id='email' label='E-mail' variant='filled' />
                    <TextField type='password' id='password' label='Пароль' variant='filled' />
                    <Button type='submit' variant='contained' color='secondary' sx={{alignSelf: 'center'}}>
                      Регистрация
                    </Button>
                  </Stack>
                  <Box sx={{fontSize: '0.8em', display: 'flex', gap: '0.5em', justifyContent: 'center'}}>
                    <NextLink href='/login' passHref>
                      <Link>Войти</Link>
                    </NextLink>
                  </Box>
                </Box>
              )}
            </Formik>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default RegisterPage;