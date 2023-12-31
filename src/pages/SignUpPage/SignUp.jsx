import Container from 'components/common/Container';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
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
  ResendBtn,
} from '../SigninPage/Auth.styled';
import { Wrapper } from '../HomePage/HomePage.styled';
import { signupSchema } from 'schemas/signupSchema';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { resetError, resetSuccessful } from 'store/auth/authSlice';
import { useAuth } from 'hooks/useAuth';

const initialValues = {
  email: '',
  password: '',
  repeatPassword: '',
};

const Signup = ({ signup, resend }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [repeatPasswordVisible, setRepeatPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { error, successful } = useAuth();
  const dispatch = useDispatch();

  const storeEmailInLocalStorage = email => {
    localStorage.setItem('registrationEmail', email);
  };
  const getStoredEmailFromLocalStorage = () => {
    return localStorage.getItem('registrationEmail') || '';
  };

  const storedEmail = getStoredEmailFromLocalStorage();
  const [email, setEmail] = useState(storedEmail);

  const handleSuccessfulAuthentication = useCallback(() => {
    toast.info('Success! Please, check your mail for confirmation.');
    setTimeout(() => {
      navigate('/signin');
    }, 6000);
    dispatch(resetSuccessful());
  }, [dispatch, navigate]);

  useEffect(() => {
    successful && !error && handleSuccessfulAuthentication();
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [dispatch, successful, error, handleSuccessfulAuthentication]);

  const handleSubmit = async (values, { setSubmitting }) => {
    storeEmailInLocalStorage(values.email);
    setEmail(values.email);
    await signup({ email: values.email, password: values.password });

    setSubmitting(false);
  };

  const handleResendConfirmationEmail = async () => {
    if (email) {
      await resend({ email });
      handleSuccessfulAuthentication();
    } else {
      toast.error('You have not entered any email yet.');
    }
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
              initialValues={{ email, ...initialValues }}
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
            <ResendBtn onClick={handleResendConfirmationEmail}>
              Resend Confirmation Email
            </ResendBtn>
            <ToastContainer />
          </div>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Signup;
