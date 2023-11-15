import styled from "styled-components";
import { color } from "styles/colors";

export const TodayWaterListItemContainer = styled.li`
width: 534px;
height: 36px;
display: flex;
justify-content: space-between;
align-items: center;
padding-bottom: 12px;
border-bottom: 1px solid ${color.secondary.gray}
`

export const TodayWaterListContainer = styled.div`
width: 544px;
//height: 260px;
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
overflow-y: scroll;

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
font-size: 26px;
font-weight: 500;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
padding-bottom:16px;
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