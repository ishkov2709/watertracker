import Container from 'components/common/Container';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { errorSelector } from '../../store/auth/selectors';
import sprite from '../../img/sprites.svg';

import {
  Label,
  Title,
  LinkToPage,
  Box,
  StyledForm,
  StyledInput,
  SigninButton,
  ErrorM,
  StyledPasswordInput,
} from '../SigninPage/Auth.styled';
import { Wrapper } from '../HomePage/HomePage.styled';

// function Signup({ signup }) {
//   const error = useSelector(errorSelector);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     dispatch(signup({ email, password }));
//   };
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Repeat password is required'),
});

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const Signup = ({ signup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(signup({ email: values.email, password: values.password }));
    setSubmitting(false);
  };
  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'repeatPassword') {
      setRepeatPasswordVisible(!repeatPasswordVisible);
    }
  };
  return (
    <Wrapper>
      <Container>
        <Box>
          <div>
            {error && <h4>{error}</h4>}

            {/* <Form onSubmit={handleSubmit}>
              <div>
                <Label>Enter your email</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  onChange={({ target: { value } }) => setEmail(value)}
                  required
                />
              </div>
              <div>
                <Label>Enter your password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={({ target: { value } }) => setPassword(value)}
                  required
                />
              </div>
              <div>
                <Label>Repeat password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Repeat pasword"
                  onChange={({ target: { value } }) => setPassword(value)}
                  required
                />
              </div>
              <RegisterButton type="submit">Sign Up</RegisterButton>

              <LinkToPage to="/signin">Sign in</LinkToPage>
            </Form> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <StyledForm>
                <Title>Sign Up</Title>
                <div>
                  <Label>Enter your email</Label>
                  <Field
                    as={StyledInput}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ErrorMessage name="email" component={ErrorM} />
                </div>
                <div>
                  <Label>Enter your password</Label>
                  <StyledPasswordInput>
                    <Field
                      as={StyledInput}
                      type={passwordVisible ? 'text' : 'password'}
                      name="password"
                      placeholder="Password"
                      required
                    />
                    <span onClick={() => togglePasswordVisibility('password')}>
                      {passwordVisible ? (
                        <svg className="eye">
                          <use href={sprite + '#eye'} />
                        </svg>
                      ) : (
                        <svg className="eye">
                          <use href={sprite + '#hidden'} />
                        </svg>
                      )}
                    </span>
                  </StyledPasswordInput>
                  <ErrorMessage name="password" component={ErrorM} />
                </div>
                <div>
                  <Label>Repeat password</Label>
                  <StyledPasswordInput>
                    <Field
                      as={StyledInput}
                      type={repeatPasswordVisible ? 'text' : 'password'}
                      name="repeatPassword"
                      placeholder="Repeat password"
                      required
                    />
                    <span
                      onClick={() => togglePasswordVisibility('repeatPassword')}
                    >
                      {repeatPasswordVisible ? (
                        <svg className="eye">
                          <use href={sprite + '#eye'} />
                        </svg>
                      ) : (
                        <svg className="eye">
                          <use href={sprite + '#hidden'} />
                        </svg>
                      )}
                    </span>
                  </StyledPasswordInput>
                  <ErrorMessage name="repeatPassword" component={ErrorM} />
                </div>
                <SigninButton type="submit">Sign Up</SigninButton>
              </StyledForm>
            </Formik>
            <LinkToPage to="/signin">Sign in</LinkToPage>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signup;
