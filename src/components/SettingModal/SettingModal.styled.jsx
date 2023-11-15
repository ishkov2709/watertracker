import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: #fff;

  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 852px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    width: 704px;
    height: 860px;
  }

  @media (min-width: 1024px) {
    max-width: 1440px;
    height: auto;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.h2`
  margin: 0;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    width: 392px;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    flex: 1;

    @media (min-width: 1024px) {
      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 8px;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-right: 12px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #407bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 256px;
  height: 36px;
  @media (min-width: 768px) {
    width: 160px;
    height: 44px;
    margin-left: 552px;
  }
  @media (min-width: 1024px) {
    grid-column: 1 / -1;
    justify-self: center;
    width: auto;
    padding: 16px 64px;
  }
`;
