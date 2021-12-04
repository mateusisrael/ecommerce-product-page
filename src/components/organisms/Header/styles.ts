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
`;

type MarginProps = {
  margin: string
}
export const Margin = styled.div<MarginProps>`
  margin: ${props => props.margin};
`;

export const CartButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

type DesktopNavProps = {
  margin?: string
}
export const DesktopNav = styled.nav<DesktopNavProps>`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin: ${({ margin }) => margin};
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  
  > li {
    @media (min-width: 768px) {
      margin: 0 1rem;
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  @media (max-width: 726px) {
    display: block;
    border: none;
    cursor: pointer;
  }
`;