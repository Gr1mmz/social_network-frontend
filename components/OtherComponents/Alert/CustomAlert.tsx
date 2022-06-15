import React from 'react';
import {Alert, AlertColor, Box, Link} from '@mui/material';
import NextLink from 'next/link';

interface ICustomAlertProps {
  type: AlertColor | undefined,
  handleClick: () => void
}

const CustomAlert: React.FC<ICustomAlertProps> = ({type, handleClick}) => {
  return (
    <Alert severity={type} onClose={() => handleClick()}
           sx={{
             position: 'absolute',
             bottom: '1em',
             left: '50%',
             transform: 'translateX(-50%)'
           }}>
      {type === 'success'
        ? <Box>
            {`Регистрация прошла успешно. Перейдите на страницу `}
            <NextLink href="/login" passHref>
              <Link>входа</Link>
            </NextLink>
          </Box>
        : <Box>
          Произошла ошибка. Проверьте введенные данные и попробуйте снова
        </Box>
      }
    </Alert>
  );
};

export default CustomAlert;