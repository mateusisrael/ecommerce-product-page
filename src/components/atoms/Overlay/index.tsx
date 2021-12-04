import { FunctionComponent, MouseEventHandler } from 'react';
import { Content, ContentProps } from './style'

interface OverlayProps extends ContentProps {
  onClick?: MouseEventHandler
}

const Overlay: FunctionComponent<OverlayProps> = ({ onClick, noColor }) => {
  return (
    <Content onClick={onClick} noColor={noColor}/>
  );
}
 
export default Overlay;