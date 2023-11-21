import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'styles/colors';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;

  padding: 80px 0;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  font-weight: 500;
  font-size: 36px;

  color: ${color.primary.blue};
`;

export const SubText = styled(Text)`
  font-weight: 400;
  font-size: 16px;

  color: ${color.secondary.azure};
`;

export const IconWrapper = styled.span`
  position: relative;
`;

export const Dash = styled.span`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(135deg);

  width: 50px;
  height: 2px;

  background: ${color.primary.blue};
`;

export const Btn = styled(Link)`
  color: inherit;
  text-decoration: none;
`;
