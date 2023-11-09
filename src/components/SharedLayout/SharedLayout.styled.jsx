import styled from 'styled-components';
import imgBgDesk1 from '../../img/background/mainPage/desktop/img_bg_1.png';
import imgBgDesk2 from '../../img/background/mainPage/desktop/img_bg_2.png';
import imgBgTab from '../../img/background/mainPage/tab/img_bg.png';
import imgBgMob from '../../img/background/mainPage/mob/img_bg.png';

export const Layout = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  background-image: url(${imgBgMob});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgBgTab});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${imgBgDesk1}), url(${imgBgDesk2});
    background-size: contain;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
`;
