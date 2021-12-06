import { FunctionComponent, useState } from 'react';
import Overlay from '../../atoms/Overlay';
import * as S from './styles'

import iconClose from '../../../images/icon-close.svg'
import { setTimeout } from 'timers';
interface MobileMenuProps {
  handleClose: Function
}
 
const MobileMenu: FunctionComponent<MobileMenuProps> = ({ handleClose }) => {
  const [animation, setAnimation] = useState<string>('open');

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

  const handleBeforeCloes = (): void => {
    setAnimation('close')
    setTimeout(() => {
      handleClose();
    }, 300) 
  }

  return (
    <>
      <Overlay animation={animation} onClick={handleBeforeCloes}/>
      <S.MobileMenu animation={animation}>
        <S.TopBox>
          <S.CloseButton onClick={handleBeforeCloes}>
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