import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background: white;
  padding: 32px 24px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 592px;
  }
`;

export const CloseButton = styled.button`
  background: #ff5f5f;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ff4c4c;
  }
`;
