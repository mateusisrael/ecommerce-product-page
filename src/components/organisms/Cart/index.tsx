import { FunctionComponent } from 'react';
import { IProduct } from '../../../api/data';
import { Section, Overlay, HGroup, Content } from './styles';

interface CartProps {
  products?: [IProduct]
}
 
const Cart: FunctionComponent<CartProps> = ({ products }) => {

  return (
    console.log('Products:', products),
    <Overlay>
      <Section>
        <HGroup><h1>Cart</h1></HGroup>

        {/* {products && products.length <= 0  && ( */}
          <Content>
            <p>Your cart is empty.</p>
          </Content>
        {/* )} */}
      </Section>
    </Overlay>
  );
}
 
export default Cart;