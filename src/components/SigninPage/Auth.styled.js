import styled from 'styled-components';
import { color } from 'styles/colors';
import imgHomeBgButle from '../../img/background/homePage/desktop/bgHomeButleDesc.png';
import imgHomeBgButleTablet from '../../img/background/homePage/tab/bgHomeTabButle.png';
import imgHomeBgButlePhone from '../../img/background/homePage/mob/bgHomePhoneButle.png';
import { Link } from 'react-router-dom';
import { Form } from 'formik';

export const Box = styled.div`
  min-height: 100vh;

  background-image: url(${imgHomeBgButlePhone});
  background-size: 100%;
  background-position: center bottom 20px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgButleTablet});
    background-size: 100%;
    background-position: right -80px bottom 16px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgHomeBgButle});
    background-size: 80%;
    background-position: bottom 80% left -51%;
    background-repeat: no-repeat;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  display: block;
  font-size: 26px;
  font-weight: 500;
  line-height: 32px;

  @media screen and (min-width: 1440px) {
    min-width: 336px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
    margin-right: 198px;
    margin-left: 833px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-items: center;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const StyledInput = styled.input`
  padding: 8px;
  padding: 12px 10px;
  border: 1px solid ${color.secondary.gray};
  background-color: ${color.primary.white};
  border-radius: 6px;
  margin-bottom: 10px;
  font-weight: 400;
  min-width: 280px;
  font-size: 16px;
  line-height: 20px;

  &::placeholder {
    color: ${color.secondary.azure};
  }

  &:last-child {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    min-width: 336px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const SigninButton = styled.button`
  background-color: ${color.primary.brue};
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  border: none;
  min-width: 280px;
  padding: 8px 30px;
  color: ${color.primary.white};
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    padding: 10px 30px;
    min-width: 336px;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const LinkToPage = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 6px;
  color: ${color.primary.brue};
  @media screen and (min-width: 1440px) {
    margin-right: 198px;
    margin-left: 833px;
  }
`;
export const ErrorM = styled.div`
  color: ${color.secondary.tomato};
  margin-bottom: 8px;
`;
