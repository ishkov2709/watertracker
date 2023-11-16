import styled from "styled-components";
import { color } from "styles/colors";

export const TodayWaterListItemContainer = styled.div`
width: 534px;
height: 36px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid ${color.secondary.gray}
`

export const WaterInfoContainer = styled.div`
width: 206px;
height: 36px;
display: flex;
align-items: center;
gap: 12px
`

export const WaterInfo = styled.p`
font-size: 18px;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: ${color.primary.blue}
`

export const WaterTime = styled.p`
font-size: 12px;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: ${color.primary.black}
`

export const ButtonControlContainer = styled.div`
width: 50px;
height: 16px;
display: flex;
align-items: center;
gap: 18px
`

export const ButtonControl = styled.div`
width: 16px;
height: 16px;
background-color: transparent;
border: none;
`
