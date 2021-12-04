import { FunctionComponent, MouseEventHandler } from 'react';
import { IProduct } from '../../../api/data';
import { Section, HGroup, Content, Container } from './styles';
import Overlay from '../../atoms/Overlay'

interface CartProps {
  products?: [IProduct]
  handleClose?: MouseEventHandler
}
 
const Cart: FunctionComponent<CartProps> = ({ products, handleClose }) => {

  return (
    console.log('Products:', products),
    <>
      <Overlay noColor onClick={handleClose}/>
      <Container>
        <Section>
          <HGroup><h1>Cart</h1></HGroup>

          {/* {products && products.length <= 0  && ( */}
            <Content>
              <p>Your cart is empty.</p>
            </Content>
          {/* )} */}
        </Section>
      </Container>
    </>
  );
}
 
export default Cart;