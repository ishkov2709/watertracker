import styled from 'styled-components';

export const Circle = styled.div`
  display: flex;
  width: 28px;
  height: 28px;
  background-color: ${("rgb(" + Math.floor(Math.random() * 255)
    + "," + Math.floor(Math.random() * 255) + ","
    + Math.floor(Math.random() * 255) + ")")};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  color: white;
  
`;

export const AvatarBtn = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    gap: 8px;
    align-items: center;
`;

export const UserName = styled.span`
   font-size: 18px;
`;

export const AvatarImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`
