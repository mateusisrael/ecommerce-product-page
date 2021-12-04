import { FunctionComponent, MouseEventHandler } from 'react';
import Overlay from '../../atoms/Overlay';
import * as S from './styles'

interface MobileMenuProps {
  handleClose: MouseEventHandler
}
 
const MobileMenu: FunctionComponent<MobileMenuProps> = ({ handleClose }) => {
  return (
    <>
      <Overlay onClick={handleClose}/>
      <S.MobileMenu>

      </S.MobileMenu>
    </>
  );
}
 
export default MobileMenu;