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

  @media screen and (max-width: 1440px) {
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      width: 0.5em;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
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

  /* @media screen and (max-width: 1439px) {
    transform: scale(0.6);
  } */

  /* @media screen and (max-width: 1024px) {
    transform: scale(0.5);
  } */

  @media screen and (max-height: 1024px) and (orientation: landscape) {
    transform: scale(0.9);
  }

  @media screen and (max-height: 768px) and (orientation: landscape) {
    transform: scale(0.5);
  }

  @media screen and (max-height: 414px) and (orientation: landscape) {
    transform: scale(0.5);
  }

  @media screen and (max-width: 414px) and (orientation: portrait) {
    transform: scale(0.8);
  }
`;
