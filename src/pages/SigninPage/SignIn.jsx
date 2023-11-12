import Container from 'components/common/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorSelector } from '../../store/auth/selectors';

import {
  Box,
  Label,
  StyledForm,
  StyledInput,
  SigninButton,
  Title,
  LinkToPage,
  ErrorM,
} from './Auth.styled';
import { Wrapper } from '../HomePage/HomePage.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// function Signin({ signin }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const error = useSelector(errorSelector);

//   const handleSubmit = e => {
//     e.preventDefault();
//     signin({ email, password });
//   };
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = {
  email: '',
  password: '',
};

const Signin = ({ signin }) => {
  const error = useSelector(errorSelector);
  const handleSubmit = (values, { setSubmitting }) => {
    signin(values);
    setSubmitting(false);
  };
  return (
    <Wrapper>
      <Container>
        <Box>
          <div>
            {error && <h4>{error}</h4>}
            <Title>Sign In</Title>
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
              <RegisterButton type="submit">Sign In</RegisterButton>
            </Form> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <StyledForm>
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
                  <Field
                    as={StyledInput}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <ErrorMessage name="password" component={ErrorM} />
                </div>
                <SigninButton type="submit">Sign In</SigninButton>
              </StyledForm>
            </Formik>

            <LinkToPage to="/forgot-password">Forgot password?</LinkToPage>

            <LinkToPage to="/signup">Sign up</LinkToPage>
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signin;
