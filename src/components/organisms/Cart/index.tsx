import { FunctionComponent } from 'react';
import { Section, Overlay, HGroup, Content } from './styles';

interface CartProps {
  
}
 
const Cart: FunctionComponent<CartProps> = () => {
  const cartContent = []
  return (
    <Overlay>
      <Section>
        <HGroup><h1>Cart</h1></HGroup>

        {cartContent.length <= 0  && (
          <Content>
            <p>Your cart is empity</p>
          </Content>
        )}
      </Section>
    </Overlay>
  );
}
 
export default Cart;