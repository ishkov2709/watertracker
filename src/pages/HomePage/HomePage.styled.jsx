import styled from 'styled-components';
import imgHomeBgbubbles from '../../img/background/homePage/desktop/bgHomeBubbleDesc.png';
import imgHomeBgButle from '../../img/background/homePage/desktop/bgHomeButleDesc.png';
import imgHomeBgButleTablet from '../../img/background/homePage/tab/bgHomeTabButle.png';
import imgHomeBgBubbleTablet from '../../img/background/homePage/tab/bgHomeTabBubble.png';
import imgHomeBgBubblePhone from '../../img/background/homePage/mob/bgHomePhoneBubble.png';
import imgHomeBgButlePhone from '../../img/background/homePage/mob/bgHomePhoneButle.png';

export const Wrapper = styled.section`
  min-height: 100vh;
  padding-bottom: 24px;
  background-image: url(${imgHomeBgBubblePhone});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgBubbleTablet});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 20px;
    background-image: url(${imgHomeBgbubbles});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const Box = styled.div`
  background-image: url(${imgHomeBgButlePhone});
  background-position: top 15px right 50%;
  background-size: 280px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${imgHomeBgButleTablet});
    background-position: top 15px right 50%;
    background-size: 80%;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-end;
    background-image: url(${imgHomeBgButle});
    background-size: 60%;
    background-position: bottom 80% left -15%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  }
`;

export const DailyNorma = styled.div`
  height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 60px;
    padding-bottom: 50px;
  }
`;

export const WaterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 25px 0;
  width: 105%;
  background-color: #ecf2ff;
  padding: 24px 8px 24px 8px;
  border-radius: 10px;
  box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 30%);

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 25px 0;
    width: 100%;
    background-color: #ecf2ff;
    padding: 32px 24px 32px 24px;
    border-radius: 10px;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 30%);
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 30px 0;
    width: 592px;
    max-height: 680px;
    background-color: #ecf2ff;
    padding: 32px 24px 32px 24px;
    border-radius: 10px;
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 30%);
  }
`;
