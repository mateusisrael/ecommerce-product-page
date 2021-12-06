import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const MobileMenu = styled.nav`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    width: 75vw;
    min-width: 18.75rem;
    height: 100vh;
    z-index: 2;
    background-color: #fff;
  }
`;

export const StyledLink = styled(Link)`
  > li{
    width: calc(100% - 1rem);
    padding: 1rem 0 1rem 1rem;
    list-style: none;
    text-decoration: none;
  }
`;

export const Ul = styled.ul`

`;

export const TopBox = styled.div`
  width: calc(100% - 1rem);
  padding: 1rem 0 1rem 1rem;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
`;