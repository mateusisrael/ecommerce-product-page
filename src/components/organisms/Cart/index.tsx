import { FunctionComponent } from 'react';
import { Section, Overlay, Header, Content } from './styles'

interface CartProps {
  
}
 
const Cart: FunctionComponent<CartProps> = () => {
  return (
    <Overlay>
      <Section>
        <Header>Cart</Header>
        <Content>
          <p>Your cart is empity</p>
        </Content>
      </Section>
    </Overlay>
  );
}
 
export default Cart;