import { ButtonContainer } from './Button.styled';

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
};

export default Button;
