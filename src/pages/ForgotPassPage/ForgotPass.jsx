import Container from 'components/common/Container';
import { ErrorMessage, Field, Formik } from 'formik';
import { useAuth } from 'hooks/useAuth';
import { Wrapper } from 'pages/HomePage/HomePage.styled';
import {
  Box,
  AllForm,
  ErrorM,
  Label,
  LinkToPage,
  SigninButton,
  StyledForm,
  StyledInput,
  Title,
} from 'pages/SigninPage/Auth.styled';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { forgotpassSchema } from 'schemas/forgotpassSchema';
import { resetError, resetSuccessful } from 'store/auth/authSlice';

const initialValues = {
  email: '',
};

const ForgotPass = ({ restore }) => {
  const { error, successful } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSuccessful = useCallback(() => {
    toast.info('Success! Please, check your mail for new temporary password.');
    setTimeout(() => {
      navigate('/signin');
    }, 6000);
    dispatch(resetSuccessful());
  }, [dispatch, navigate]);

  const handleSubmit = async (email, { setSubmitting }) => {
    await restore(email);
    setSubmitting(false);
  };

  useEffect(() => {
    successful && !error && handleSuccessful();
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [dispatch, successful, error, handleSuccessful]);

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotpassSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <StyledForm>
                  <Title>Password Reset</Title>
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
                  <SigninButton
                    type="submit"
                    width={336}
                    disabled={isSubmitting}
                  >
                    Send
                  </SigninButton>
                </StyledForm>
              )}
            </Formik>

            <LinkToPage to="/signin">Back to Sign In</LinkToPage>
            <ToastContainer />
          </AllForm>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ForgotPass;
