import styled, { css } from 'styled-components';
import { color } from 'styles/colors';
import imgHomeBgButle from '../../img/background/homePage/desktop/bgHomeButleDesc.png';
import imgHomeBgButleTablet from '../../img/background/homePage/tab/bgHomeTabButle.png';
import imgHomeBgButlePhone from '../../img/background/homePage/mob/bgHomePhoneButle.png';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
import Button from 'components/common/Button';

export const Box = styled.div`
  min-height: calc(100vh - 68px);

  background-image: url(${imgHomeBgButlePhone});
  background-size: 100%;
  background-position: center bottom 20px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgButleTablet});
    background-size: 100%;
    background-position: right -100px bottom 56px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgHomeBgButle});
    background-size: 70%;
    background-position: top 0px left -81px;
    background-repeat: no-repeat;
    margin-top: 0%;
  }
`;

export const AllForm = styled.div`
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 196px;
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
    margin-top: 40px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
    margin-left: 833px;
    margin-top: 113px;
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  align-content: flex-start;

  margin-top: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-wrap: wrap;
    align-content: flex-start;

    &:not(:first-child) {
      align-items: flex-start;
    }
  }

  @media screen and (min-width: 1440px) {
    align-items: flex-end;
    margin-right: 104px;
    flex-wrap: wrap;
    align-content: flex-end;

    &:not(:first-child) {
      align-items: flex-end;
    }
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
  color: ${color.primary.blue};
  &::placeholder {
    color: ${color.secondary.azure};
  }

  &:last-child {
    margin-bottom: 16px;
  }

  &:focus {
    outline: none;
    border-color: ${color.secondary.gray};
    box-shadow: 0 0 5px ${color.secondary.gray};
  }

  ${props =>
    props.hasError &&
    css`
      border-color: ${color.secondary.tomato} !important;
      color: ${color.secondary.tomato};
    `}

  @media screen and (min-width: 768px) {
    min-width: 336px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const StyledPasswordInput = styled.div`
  position: relative;
  display: inline-block;

  svg.eye {
    position: absolute;
    top: 14px;
    right: 14px;
    width: 16px;
    height: 16px;
    cursor: pointer;
    fill: none;
    stroke: ${color.primary.blue};
    stroke-width: 5px;
  }
`;

export const SigninButton = styled(Button)`
  background-color: ${color.primary.blue};
  border-radius: 10px;
  border: none;
  min-width: 280px;
  padding: 8px 30px;
  color: ${color.primary.white};
  font-size: 16px;
  @media screen and (min-width: 768px) {
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
  color: ${color.primary.blue};
  @media screen and (min-width: 1440px) {
    margin-left: 730px;
  }
`;
export const ErrorM = styled.div`
  color: ${color.secondary.tomato};
  margin-bottom: 8px;
  margin-top: -8px;

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    width: 364px;
  }
`;
