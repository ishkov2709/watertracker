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
import { useSelector } from 'react-redux';
import { forgotpassSchema } from 'schemas/forgotpassSchema';
import { errorSelector } from 'store/auth/selectors';

const initialValues = {
  email: '',
};

const ForgotPass = () => {
  const error = useSelector(errorSelector);
  //const dispatch = useDispatch();

  // const handleSubmit = async (values, { setSubmitting }) => {
  //   signin(values);
  //   setSubmitting(false);
  // };

  return (
    <Wrapper>
      <Container>
        <Box>
          <AllForm>
            {error && <CaughtError>{error}</CaughtError>}
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
