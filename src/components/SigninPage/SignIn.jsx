import Container from 'components/Container';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { errorSelector } from '../../store/auth/selectors';

import { RegisterButton, Label, Input, Form, Title } from './Auth.styled';

function Signin({ signin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(errorSelector);

  const handleSubmit = e => {
    e.preventDefault();
    signin({ email, password });
  };
  return (
    <Container>
      <div>
        {error && <h4>{error}</h4>}
        <Title>Login</Title>
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
          <RegisterButton type="submit">Sign In</RegisterButton>
        </Form>
        <p>
          <Link to="/forgot-password">Forgot password?</Link>
        </p>
        <p>
          <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </Container>
  );
}

export default Signin;
