import styled from 'styled-components';

export const ModalHeader = styled.div`
  display: flex;
  color: #333;
  font-size: 26px;
  font-weight: 500px;
`;

export const CloseButton = styled.div`
  position: relative;
  margin-left: auto;
`;

export const DailyNormas = styled.div`
  margin-top: 24px;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const Man = styled.div`
  margin-left: 24px;
`;

export const TextNormal = styled.span`
  color: #8f8f8f;
`;

export const Forman = styled.span`
  margin-left: 24px;
`;

export const ColorTextNormal = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 24px;
  color: #407bff;
  text-align: left;
  display: inline-block;
  width: 168px;
`;

export const VolumeNorm = styled.div`
  margin-top: 12px;
  border-radius: 10px;
  border: 1px solid #d7e3ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 12px;
  color: #407bff;
  line-height: 16px;
  display: inline-block;
  width: 100%;
  word-wrap: break-word;
`;

export const CalculateYourRate = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  width: 156px;
`;

export const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const FrameItem = styled.input`
  appearance: none;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #407bff;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  margin: 0;
  position: relative;

  &:checked {
    &::before {
      content: '\u2022';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      background-color: #407bff;
      border-radius: 50%;
      color: #fff;
    }
  }
`;

export const YourWeight = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const YourTime = styled.div`
  margin-top: 16px;
`;

export const Required = styled.div`
  margin-top: 16px;
`;

export const L = styled.b`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  display: inline-block;
  color: #407bff;
  flex-shrink: 0;
`;

export const Write = styled.div`
  margin-top: 24px;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  width: 348px;
`;

export const Frame = styled.div`
  margin-top: 16px;
`;

export const SaveWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
  line-height: 24px;
`;

