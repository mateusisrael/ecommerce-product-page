import { FunctionComponent } from 'react';
import * as S from './styles';

import menuSVG from '../../../images/icon-menu.svg';
import logoSVG from '../../../images/logo.svg';
import cartSVG from '../../../images/icon-cart.svg';
import avatarPNG from '../../../images/image-avatar.png';

interface HeaderProps {
  
}
 
const Header: FunctionComponent<HeaderProps> = () => {
  const menuItems = [
    {
      name: "Collections",
      to: "/collections"
    },
    {
      name: "Men",
      to: "/men"
    },
    {
      name: "Women",
      to: "/women"
    },
    {
      name: "About",
      to: "/about"
    },
    {
      name: "Contact",
      to: "/contact"
    }
  ]
  return (
    <S.Header>
      <S.View>
        <S.Margin margin={'0 1rem 0 0'}>
          <nav>
            <figure>
              <img src={menuSVG} />
            </figure>
            {/* <ul>
              {menuItems.map((item, i) => <li key={i}>{item.name}</li>)}
            </ul> */}
          </nav>
        </S.Margin>
        <figure>
          <img src={logoSVG} />
        </figure>
      </S.View>
      <S.View>
        <S.Margin margin={'0 1rem 0 0'}>
          <figure>
            <img src={cartSVG} />
          </figure>
        </S.Margin>

        <S.Profile src={avatarPNG} />
      </S.View>

    </S.Header>
  );
}
 
export default Header;