import styled from 'styled-components';

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