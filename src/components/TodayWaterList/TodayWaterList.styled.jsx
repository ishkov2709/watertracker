import styled from "styled-components";
import { color } from "styles/colors";

export const TodayWaterListItemContainer = styled.li`
// width: 254px;
// height: 26px;
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 12px;
border-bottom: 1px solid ${color.secondary.gray};

@media screen and (min-width: 768px) {
 
  }

  @media screen and (min-width: 1440px) {
    //width: 534px;
  }
`

export const TodayWaterListContainer = styled.div`
width: 254px;
//height: 260px;
display: flex;
// gap: 16px;
flex-direction: column;
justify-content: center;
// align-items: center;

@media screen and (min-width: 768px) {
    width: 656px;
    
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }
`

export const TodayWaterListing = styled.ul`
width: 254px;
height: 212px;
display: flex;
gap: 12px;
flex-direction: column;
// justify-content: center;
// align-items: center;
overflow-y: scroll;

@media screen and (min-width: 768px) {
    width: 656px;
    height: 212px;
  }

  @media screen and (min-width: 1440px) {
    width: 534px;
  }

&
/* width */
::-webkit-scrollbar {
  width: 4px;
}
&
/* Track */
::-webkit-scrollbar-track {
  background: ${color.secondary.gray};
}
&
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${color.primary.blue};
}
&
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${color.primary.blue};
}
`

export const TodayWaterListHeader = styled.p`
font-size: 24px;
font-weight: 500;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
padding-bottom:16px;
color: ${color.primary.black}

@media screen and (min-width: 768px) {
font-size: 26px;
  }

  @media screen and (min-width: 1440px) {

  }
`

export const AddWaterButton = styled.button`
display: flex;
gap: 8px;

align-items: center;

font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

background-color: transparent;
color: ${color.primary.blue};
border: none;

@media screen and (min-width: 768px) {
font-size: 18px;

line-height: 24px;
  }

  @media screen and (min-width: 1440px) {

  }
  `