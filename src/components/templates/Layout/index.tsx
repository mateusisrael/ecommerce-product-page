import { FunctionComponent } from 'react';
import Header from '../../organisms/Header';
import Cart from '../../organisms/Cart' 


interface LayoutProps {
}
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <body>
      <Header />
      <Cart />
      {children}
      
    </body>
   );
}
 
export default Layout;