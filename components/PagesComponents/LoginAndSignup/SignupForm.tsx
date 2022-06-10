import React from 'react';
import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import NextLink from 'next/link';
import {Formik} from 'formik';
import * as yup from 'yup';

const SignupForm = () => {
  const validationSchema = yup.object().shape({
    username: yup.string().required('Обязательное поле'),
    email: yup.string().email('Введите e-mail в формате mail@mail.ru').required('Обязательное поле'),
    password: yup.string().min(8, 'Минимальная длина пароля 8 символов').required('Обязательное поле'),
  });

  return (
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
            <TextField type='text' id='username' label='Имя пользователя' variant='filled' name='username'
                       value={values.username} error={!!(errors.username && touched.username)}
                       helperText={errors.username && touched.username ? errors.username : ''}
                       onChange={handleChange} onBlur={handleBlur} />
            <TextField type='email' id='email' label='E-mail' variant='filled' name='email'
                       value={values.email} error={!!(errors.email && touched.email)}
                       helperText={errors.email && touched.email ? errors.email : ''}
                       onChange={handleChange} onBlur={handleBlur} />
            <TextField type='password' id='password' label='Пароль' variant='filled' name='password'
                       value={values.password} error={!!(errors.password && touched.password)}
                       helperText={errors.password && touched.password ? errors.password : ''}
                       onChange={handleChange} onBlur={handleBlur} />
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
  );
};

export default SignupForm;