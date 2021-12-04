import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  padding-top: 1rem;
  background-color: transparent;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  width: 92%;
  height: 250px;
  border-radius: .8rem;
  background-color: #fff;
  box-shadow: 0px 16px 46px -4px rgb(196 196 196);
  -webkit-box-shadow: 0px 16px 46px -4px rgb(196 196 196);
  -moz-box-shadow: 0px 16px 46px -4px rgb(196 196 196);
  z-index: 2;
`;

export const HGroup = styled.hgroup`
  padding: 1.5rem 0 1.5rem 1.5rem;
  border-bottom: 1px solid silver;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
`;