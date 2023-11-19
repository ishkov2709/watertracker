import styled from 'styled-components';

export const DeleteModalBox = styled.div`
  width: 256px;
  height: 232px;
  padding: 8px 12px;

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 544px;
    height: 144px;
  }
`;

export const ButtonBox = styled.div`
  display: block;
  margin-top: 20px;

  @media screen and (min-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 4px;
  }
`;
export const DeleteModalTitle = styled.h2`
  margin-top: 5px;
  margin-bottom: 25px;
  font-family: Roboto;
  font-size: 26px;
  font-weight: 500;
  color: #2f2f2f;

  @media screen and (max-width: 767px) {
    line-height: 32px;
  }
`;
export const DeleteModalDescription = styled.span`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #2f2f2f;

  @media screen and (max-width: 767px) {
    line-height: 20px;
  }
`;
export const TitleBox = styled.div``;

export const ButtonPadding = styled.span`
  padding: 0 25px;

  @media screen and (max-width: 767px) {
    width: 232px;
    font-size: 16px;
    font-weight: 500;
  }
`;
export const ButtonMargin = styled.span`
  margin-left: 40px;
`;

export const CloseButton = styled.button`
  position: absolute;
  background: none;

  @media screen and (max-width: 768px) {
    margin-left: 210px;
    margin-top: 9px;
  }

  @media screen and (min-width: 767px) {
    margin-left: 508px;
    margin-top: 5px;
  }
`;

export const BrSpan = styled.span`
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`;
