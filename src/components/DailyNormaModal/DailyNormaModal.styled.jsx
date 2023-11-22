import styled from 'styled-components';
import sprite from 'img/sprites.svg';
import { color } from 'styles/colors';

export const ModalBox = styled.div`
  width: 256px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 652px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 544px;
    margin: 0 auto;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const CloseButton = styled.button`
  background-color: transparent;
`;

export const GenderFormulas = styled.div`
  margin-bottom: 12px;

  display: flex;
  align-items: center;
  gap: 24px;
`;

export const ItemsGenders = styled.p`
  font-size: 16px;
  line-height: 1.25;
`;

export const Formulas = styled.span`
  color: ${color.primary.blue};

  font-size: 18px;
  line-height: 1.33;
`;

export const VolumeNorm = styled.p`
  padding: 10px;
  margin-bottom: 24px;

  color: #8f8f8f;
  border-radius: 10px;
  border: 1px solid ${color.secondary.gray};

  font-size: 12px;
  line-height: 1.33;
`;

export const FormTitle = styled.form`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;

export const Genders = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;

    font-size: 16px;
    line-height: 1.25;
  }

  input:checked {
    fill: blue;
  }
`;

export const DailyNormas = styled.div`
  margin-top: 24px;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const YourWeight = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const YourTime = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
`;

export const Required = styled.div`
  margin-bottom: 8px;
  margin-top: 16px;

  width: 225px;
  height: auto;
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: auto;
  }
`;

export const L = styled.b`
  display: flex;
  align-items: center;
  margin-left: 6px;
  font-size: 18px;
  line-height: 24px;
  display: inline-block;
  color: #407bff;
  flex-shrink: 0;
`;

export const Write = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  line-height: 20px;
  font-weight: 500;
`;

export const SaveWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;

  @media (min-width: 768px) {
    button {
      width: 160px;
      height: 44px;
    }
  }
`;
