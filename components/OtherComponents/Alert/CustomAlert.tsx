import React from 'react';
import {Alert, AlertColor, Link} from '@mui/material';
import NextLink from 'next/link';
import {errorCodes} from './errorCodes';

interface ICustomAlertProps {
  type: AlertColor | undefined,
  handleClick: () => void,
  errorCode?: PropertyKey | undefined
}

const CustomAlert: React.FC<ICustomAlertProps> = ({type, handleClick, errorCode}) => {
  return (
    <Alert severity={type} onClose={() => handleClick()}
           sx={{position: 'absolute', bottom: '1em', left: '50%', transform: 'translateX(-50%)'}}>
      {type === 'success'
        ? <>
          {`Регистрация прошла успешно. Перейдите на страницу `}
          <NextLink href="/login" passHref>
            <Link>входа</Link>
          </NextLink>
        </>
        : <>
          {errorCode && (Object.prototype.hasOwnProperty.call(errorCodes, errorCode))
            // @ts-ignore
            ? errorCodes[errorCode]
            : `Произошла ошибка. Проверьте введенные данные и попробуйте снова`}
        </>
      }
    </Alert>
  );
};

export default CustomAlert;