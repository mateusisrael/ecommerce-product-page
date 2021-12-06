import styled, { keyframes } from 'styled-components';


export type ContentProps = {
  noColor?: boolean
  animation?: string
}

const open = keyframes`
  0%{ opacity: 0; }
  100%{ opacity: .6; }
`;
const close = keyframes`
  0%{ opacity: .6; }
  70%{ opacity: .6; }
  100%{ opacity: 0; }
`;
export const Content = styled.div<ContentProps>`
  /* todo: arrumar uma forma de o coiso sumir quand o menu mobile sumir */
  /* display: none; */
  /* @media (max-width: 768px) { */
    display: block;
    position: fixed;
    opacity: .6;
    width: 100vw;
    height: 100vh;
    background-color: ${({ noColor }) => noColor ? 'transparent': '#000000'};
    z-index: 1;
  /* } */

  animation: ${props => props.animation === 'open' ? open : close} .3s;
`;
