import styled from "styled-components"

export const DeleteModalBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 560px;
height: 156px;

@media screen and (max-width: 768px) {
    width: 260px;
    height: 256px;
    padding: 8px 12px;
  }
`

export const ButtonBox = styled.div`
@media screen and (max-width: 768px) {
   display: block;
   margin-top: 20px;
  }

display: flex;
justify-content: flex-end;
margin-bottom: 4px;
`
export const DeleteModalTitle = styled.h2`
@media screen and (max-width: 768px) {
    line-height: 32px
   }
    margin-top: 5px;
    margin-bottom: 25px;
    font-family: Roboto;
    font-size: 26px;
    font-weight: 500;
    color: #2F2F2F;
`
export const DeleteModalDescription = styled.span`
@media screen and (max-width: 768px) {
    line-height: 20px
   }

font-family: Roboto;
font-size: 18px;
font-weight: 500;
color: #2F2F2F;    
`
export const TitleBox = styled.div`

`

export const ButtonPadding = styled.span`
@media screen and (max-width: 768px) {
    width: 232px;
    font-size: 16px;
    font-weight: 500;
   }
padding: 0 25px;
`
export const ButtonMargin = styled.span`
margin-left: 40px
`

export const CloseButton = styled.button`
position: absolute;
margin-left: 538px;
margin-top: 5px;
background: none;

@media screen and (max-width: 768px) {
    margin-left: 210px;
    margin-top: 9px;
   }
`

export const BrSpan = styled.span`
@media screen and (max-width: 768px) {
    margin-left: 10px;
   }
`