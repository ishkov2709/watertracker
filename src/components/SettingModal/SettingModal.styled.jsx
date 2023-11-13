import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 960px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-top: 24px;
`;
