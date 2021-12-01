import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: calc(100vh - 69px - 1rem);
  padding-top: 1rem;
  background-color: silver;
`;

export const Section = styled.section`
  min-width: 300px;
  width: 92%;
  height: 250px;
  border-radius: .8rem;
  background-color: #fff;
  box-shadow: 0px 53px 54px -47px rgba(196,196,196,1);
  -webkit-box-shadow: 0px 53px 54px -47px rgba(196,196,196,1);
  -moz-box-shadow: 0px 53px 54px -47px rgba(196,196,196,1);
`;

export const Header = styled.header`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border-bottom: 1px solid silver;
`;

export const Content = styled.div`
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
`;