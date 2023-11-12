import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div(({ type }) => ({
  borderRadius: '10px',
  background: '#fff',

  padding: type === 'settings' ? '32px 12px' : '24px 12px',
}));

export const ModalContainer = styled(Container)`
  @media (min-width: 768px) {
    padding: 32px 24px;
  }
`;
