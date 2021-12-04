import styled from 'styled-components';


export type ContentProps = {
  noColor?: boolean
}
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
`;