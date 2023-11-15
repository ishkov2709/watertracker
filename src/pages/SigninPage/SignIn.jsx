import Container from 'components/common/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { errorSelector } from '../../store/auth/selectors';
import sprite from '../../img/sprites.svg';
import {
  Box,
  Label,
  StyledForm,
  StyledInput,
  SigninButton,
  Title,
  LinkToPage,
  ErrorM,
  StyledPasswordInput,
  AllForm,
} from './Auth.styled';
import { Wrapper } from '../HomePage/HomePage.styled';
import { Formik, Field, ErrorMessage } from 'formik';
import { singinSchema } from 'schemas/singinSchema';

const initialValues = {
  email: '',
  password: '',
};

const Signin = ({ signin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const error = useSelector(errorSelector);
  const handleSubmit = (values, { setSubmitting }) => {
    signin(values);
    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            {error && <h4>{error}</h4>}
            <Formik
              initialValues={initialValues}
              validationSchema={singinSchema}
              onSubmit={handleSubmit}
            >
              <StyledForm>
                <Title>Sign In</Title>
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
                    <span onClick={togglePasswordVisibility}>
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
                <SigninButton type="submit">Sign In</SigninButton>
              </StyledForm>
            </Formik>

            <LinkToPage to="/forgot-password">Forgot password?</LinkToPage>

            <LinkToPage to="/signup">Sign up</LinkToPage>
          </AllForm>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signin;
