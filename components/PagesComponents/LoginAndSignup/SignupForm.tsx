import React, {Dispatch, SetStateAction, useRef} from 'react';
import NextLink from 'next/link';
import {Formik} from 'formik';
import {Box, Button, Link, Stack, TextField, Typography} from '@mui/material';
import type {AlertColor} from '@mui/material/Alert';
import {doUserRegistration} from '../../../parse/functions';
import {validationSchema} from './validationSchema';

interface ISignupProps {
  setAlert: Dispatch<SetStateAction<boolean>>,
  setAlertType: Dispatch<SetStateAction<AlertColor | undefined>>,
  setErrorCode: Dispatch<any>
}

const SignupForm: React.FC<ISignupProps> = ({setAlert, setAlertType, setErrorCode}) => {
  const ref = useRef(null);

  return (
    <Formik validateOnBlur validationSchema={validationSchema} innerRef={ref}
            initialValues={{
              username: '',
              firstname: '',
              lastname: '',
              email: '',
              password: ''
            }}
            onSubmit={(values, actions) => {
              doUserRegistration(actions, setAlert, setAlertType, setErrorCode, ref);
            }}>
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
        <Box component="form" onSubmit={handleSubmit}>
          <Typography variant="h2" gutterBottom
                      sx={{
                        fontSize: '2em',
                        textAlign: 'center'
                      }}>
            Регистрация
          </Typography>
          <Stack spacing={2} sx={{margin: '2em 0'}}>
            <TextField type="text" id="username" label="Имя пользователя" variant="filled" name="username"
                       value={values.username} error={!!(errors.username && touched.username)}
                       helperText={errors.username && touched.username ? errors.username : ''}
                       onChange={handleChange} onBlur={handleBlur}/>
            <TextField type="text" id="firstname" label="Ваше имя" variant="filled" name="firstname"
                       value={values.firstname} error={!!(errors.firstname && touched.firstname)}
                       helperText={errors.firstname && touched.firstname ? errors.firstname : ''}
                       onChange={handleChange} onBlur={handleBlur}/>
            <TextField type="text" id="lastname" label="Ваша фамилия" variant="filled" name="lastname"
                       value={values.lastname} error={!!(errors.lastname && touched.lastname)}
                       helperText={errors.lastname && touched.lastname ? errors.lastname : ''}
                       onChange={handleChange} onBlur={handleBlur}/>
            <TextField type="email" id="email" label="E-mail" variant="filled" name="email"
                       value={values.email} error={!!(errors.email && touched.email)}
                       helperText={errors.email && touched.email ? errors.email : ''}
                       onChange={handleChange} onBlur={handleBlur}/>
            <TextField type="password" id="password" label="Пароль" variant="filled" name="password"
                       value={values.password} error={!!(errors.password && touched.password)}
                       helperText={errors.password && touched.password ? errors.password : ''}
                       onChange={handleChange} onBlur={handleBlur}/>
            <Button type="submit" variant="contained" color="secondary" sx={{alignSelf: 'center'}}>
              Регистрация
            </Button>
          </Stack>
          <Box sx={{fontSize: '0.8em', display: 'flex', gap: '0.5em', justifyContent: 'center'}}>
            Уже есть аккаунт?
            <NextLink href="/login" passHref>
              <Link>Войти</Link>
            </NextLink>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default SignupForm;