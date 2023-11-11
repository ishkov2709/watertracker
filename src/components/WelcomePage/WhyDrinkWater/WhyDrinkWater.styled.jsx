import styled from 'styled-components';
import { color } from 'styles/colors';

export const WdwWrapper = styled.div`
    width: 280px;
    min-height: 384px;
    padding: 24px 16px;
    border-radius:10px;
    background-color: ${color.secondary.white};
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.30);
    @media screen and (min-width: 768px) {
    width: 494px;
     min-height: 0;
    }
    @media screen and (min-width: 1440px) {
    margin-top: auto;
    height: 332px;
    width: 494px;
    padding: 32px 24px;
    min-height: 0;
    }
`

export const WdwTitle = styled.h3`
    color: ${color.primary.black};
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  font-style: normal;
  margin-bottom: 12px;
`

export const WdwList = styled.ul`

`

export const WdwItem = styled.li`
  display:flex;
  gap:8px;
  margin-bottom: 16px;
  &:nth-child(7) {
  margin-bottom:0;
}
`

export const WdwIconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const WdwItemText = styled.p`
  font-size: 16px;
  line-height: 1.25;
  font-weight: 400;
  font-style: normal;
`