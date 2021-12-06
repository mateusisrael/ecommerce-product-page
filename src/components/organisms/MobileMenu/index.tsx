import { FunctionComponent, MouseEventHandler } from 'react';
import Overlay from '../../atoms/Overlay';
import * as S from './styles'

import iconClose from '../../../images/icon-close.svg'
interface MobileMenuProps {
  handleClose: MouseEventHandler
}
 
const MobileMenu: FunctionComponent<MobileMenuProps> = ({ handleClose }) => {
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
    <>
      <Overlay onClick={handleClose}/>
      <S.MobileMenu>
        <S.TopBox>
          <S.CloseButton onClick={handleClose}>
            <figure>
              <img alt={'Close menu icon button'} src={iconClose}></img>
            </figure>
          </S.CloseButton>
        </S.TopBox>
        <S.Ul>
          {menuItems.map((item, i) => (
            <S.StyledLink to={item.to} key={i}>
              <li >
                {item.name}
              </li>
            </S.StyledLink>
          ))}
        </S.Ul>
      </S.MobileMenu>
    </>
  );
}
 
export default MobileMenu;