import styled from 'styled-components';

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  margin-bottom: 40px;
  padding: 10px;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  margin-left: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-color: #d1bff5;
  }
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  margin-right: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #5526e0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #4621b5;
  }
`;
