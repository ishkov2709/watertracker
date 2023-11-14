import styled from "styled-components";
import { color } from "styles/colors";

export const TodayWaterListContainer = styled.div`
width: 544px;
height: 260px;
display: flex;
// gap: 16px;
flex-direction: column;
justify-content: center;
// align-items: center;
`

export const TodayWaterListing = styled.ul`
width: 544px;
height: 212px;
display: flex;
gap: 12px;
flex-direction: column;
// justify-content: center;
// align-items: center;
overflow: scroll-y;
`

export const TodayWaterListHeader = styled.p`
font-size: 26px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
color: ${color.primary.black}
`

export const AddWaterButton = styled.button`
display: flex;
gap: 8px;
//justify-content: center;
align-items: center;
// width: 114px;
// height: 44px;
// padding: 10px 30px 10px 30px;
// border-radius: 10px;

font-size: 18px;
font-weight: 500;
line-height: 24px;
letter-spacing: 0em;
text-align: left;

background-color: transparent;
color: ${color.primary.blue};
border: none;`