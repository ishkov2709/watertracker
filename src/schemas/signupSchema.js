import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/,
      'Email should have letters, numbers, special characters'
    )
    .min(8, 'Too short password')
    .max(64, 'Too long password')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Too short password')
    .max(64, 'Too long password')
    .required('Repeat password is required'),
});
