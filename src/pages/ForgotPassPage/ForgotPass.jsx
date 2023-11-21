import Container from 'components/common/Container';
import { ErrorMessage, Field, Formik } from 'formik';
import { Wrapper } from 'pages/HomePage/HomePage.styled';
import {
  Box,
  AllForm,
  CaughtError,
  ErrorM,
  Label,
  LinkToPage,
  SigninButton,
  StyledForm,
  StyledInput,
  Title,
} from 'pages/SigninPage/Auth.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { forgotpassSchema } from 'schemas/forgotpassSchema';
import { resetError } from 'store/auth/authSlice';
import { errorSelector } from 'store/auth/selectors';

const initialValues = {
  email: '',
};

const ForgotPass = () => {
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   signin(values);
  //   setSubmitting(false);
  // };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetError());
    }
  }, [error]);

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            <Formik
              initialValues={initialValues}
              validationSchema={forgotpassSchema}
              //onSubmit={handleSubmit}
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
          </AllForm>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default ForgotPass;
