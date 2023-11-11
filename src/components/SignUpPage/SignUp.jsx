import Container from 'components/common/Container';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorSelector } from '../../store/auth/selectors';

import {
  RegisterButton,
  Label,
  Input,
  Form,
  Title,
} from '../SigninPage/Auth.styled';

function Signup({ signup }) {
  const error = useSelector(errorSelector);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signup({ email, password }));
  };
  return (
    <Container>
      <div>
        {error && <h4>{error}</h4>}
        <Title>Sign up</Title>
        <Form onSubmit={handleSubmit}>
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
          <p>
            <Link to="/signin">Sign in</Link>
          </p>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;
