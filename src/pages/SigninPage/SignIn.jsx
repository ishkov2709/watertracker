import Container from 'components/common/Container';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { ToastContainer, toast } from 'react-toastify';
import { resetError } from 'store/auth/authSlice';
import { useAuth } from 'hooks/useAuth';

const initialValues = {
  email: '',
  password: '',
};

const Signin = ({ signin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { error } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [error, dispatch]);

  const handleSubmit = async (values, { setSubmitting }) => {
    signin(values);
    setSubmitting(false);
    localStorage.setItem('registrationEmail', '');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            <Formik
              initialValues={initialValues}
              validationSchema={singinSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <StyledForm>
                  <Title>Sign In</Title>
                  <div>
                    <Label>Enter your email</Label>
                    <Field
                      as={StyledInput}
                      type="email"
                      name="email"
                      placeholder="Email"
                      hasError={touched.email && errors.email}
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
                        hasError={touched.password && errors.password}
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
                  <SigninButton
                    type="submit"
                    width={336}
                    disabled={isSubmitting}
                  >
                    Sign In
                  </SigninButton>
                </StyledForm>
              )}
            </Formik>

            <LinkToPage to="/forgot-password">Forgot password?</LinkToPage>

            <LinkToPage to="/signup">Sign up</LinkToPage>
            <ToastContainer />
          </AllForm>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signin;
