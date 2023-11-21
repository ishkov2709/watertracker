import Container from 'components/common/Container';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import { errorSelector, successfulSelector } from '../../store/auth/selectors';
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
import { signupSchema } from 'schemas/signupSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetError, resetSuccessful } from 'store/auth/authSlice';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const Signup = ({ signup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const successful = useSelector(successfulSelector);
  const navigate = useNavigate();
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  const handleSuccessfulAuthentication = useCallback(() => {
    toast.info(
      'Успішна реєстрація! Вам на пошту був відправлений лист для підтвердження.'
    );
    setTimeout(() => {
      navigate('/signin');
    }, 6000);
    dispatch(resetSuccessful());
  }, [dispatch, navigate]);

  useEffect(() => {
    console.log(successful);
    successful && !error && handleSuccessfulAuthentication();
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [successful, error, handleSuccessfulAuthentication]);

  const handleSubmit = async (values, { setSubmitting }) => {
    await signup({ email: values.email, password: values.password });

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
            <Formik
              initialValues={initialValues}
              validationSchema={signupSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <StyledForm>
                  <Title>Sign Up</Title>
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
                      <span
                        onClick={() => togglePasswordVisibility('password')}
                      >
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
                        hasError={
                          touched.repeatPassword && errors.repeatPassword
                        }
                      />
                      <span
                        onClick={() =>
                          togglePasswordVisibility('repeatPassword')
                        }
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
                  <SigninButton
                    type="submit"
                    width={336}
                    disabled={isSubmitting}
                  >
                    Sign Up
                  </SigninButton>
                </StyledForm>
              )}
            </Formik>
            <LinkToPage to="/signin">Sign in</LinkToPage>

            <ToastContainer />
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signup;
