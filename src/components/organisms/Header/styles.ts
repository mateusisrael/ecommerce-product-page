import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 4.313rem;
  width: 100vw;
  padding: 0 1.4rem;
  border-bottom: 1px solid silver;
  box-sizing: border-box;
`;

export const Profile = styled.img`
  width: 2rem;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  /* &:first-child {
    background-color: red;
    margin-right: 1rem;
  } */
`;

type MarginProps = {
  margin: string
}
export const Margin = styled.div<MarginProps>`
  margin: ${props => props.margin};
`;