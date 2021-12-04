import { FunctionComponent, MouseEventHandler } from 'react';
import * as S from './styles';

import menuSVG from '../../../images/icon-menu.svg';
import logoSVG from '../../../images/logo.svg';
import cartSVG from '../../../images/icon-cart.svg';
import avatarPNG from '../../../images/image-avatar.png';

interface HeaderProps {
  // todo: tipar isso
  handleModal: any
}
 
const Header: FunctionComponent<HeaderProps> = ({ handleModal }) => {
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
          {/* Criar um component apenas para dar margin não parece muito bom. ver nav da linha 51*/}
          <S.MenuButton onClick={() => handleModal('menu')}>
            <figure>
              <img alt={'menu icon'} src={menuSVG} />
            </figure>
          </S.MenuButton>
        </S.Margin>
        <figure>
          <img alt={'logo'} src={logoSVG} />
        </figure>
        <S.DesktopNav margin={'0 0 0 1rem'}>
          <S.Ul>
            {menuItems.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </S.Ul>
        </S.DesktopNav>
      </S.View>
      <S.View>
        <S.Margin margin={'0 1rem 0 0'}>
          <S.CartButton onClick={() => handleModal('cart')}>
            <figure>
              <img alt={'cart icon'} src={cartSVG} />
            </figure>
          </S.CartButton>
        </S.Margin>

        <S.Profile src={avatarPNG} />
      </S.View>

    </S.Header>
  );
}
 
export default Header;