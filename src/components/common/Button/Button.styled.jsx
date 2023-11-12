import styled from 'styled-components';

const Btn = styled.button(({ width }) => ({
  width: `${width}px`,
}));

export const ButtonContainer = styled(Btn)`
  padding: 10px 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  color: #fff;
  border-radius: 10px;
  background: #407bff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
