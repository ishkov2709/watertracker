import styled from 'styled-components';
import { color } from 'styles/colors';
import { NavLink } from 'react-router-dom';


export const Signin = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const SigninText = styled(NavLink)`
    color: ${color.primary.blue};
    text-decoration: none;
`;