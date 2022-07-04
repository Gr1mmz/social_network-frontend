import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string()
    .max(30, 'Длина не должна превышать 30 символов')
    .min(5, 'Минимальное количество символов - 5')
    .matches(/^[a-zA-Z0-9]{5,30}$/,
      {
        excludeEmptyString: true,
        message: `Можно использовать только латиницу и цифры без пробелов`
      })
    .required('Обязательное поле'),
  firstname: yup.string()
    .max(15, 'Длина не должна превышать 15 символов')
    .matches(/(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14})$/,
      {
        excludeEmptyString: true,
        message: `Имя должно начинаться с большой буквы и содержать только символы алфавита`
      })
    .required('Обязательное поле'),
  lastname: yup.string()
    .max(15, 'Длина не должна превышать 15 символов')
    .matches(/(^[A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14})$/,
      {
        excludeEmptyString: true,
        message: `Фамилия должна начинаться с большой буквы и содержать только символы алфавита`
      })
    .required('Обязательное поле'),
  email: yup.string().email('Введите e-mail в формате mail@mail.ru').required('Обязательное поле'),
  password: yup.string().min(8, 'Минимальная длина пароля 8 символов').required('Обязательное поле'),
});