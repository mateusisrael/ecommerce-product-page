import { FunctionComponent, useState } from 'react';
import Header from '../../organisms/Header';
import Cart from '../../organisms/Cart' 
import MobileMenu from '../../organisms/MobileMenu';

import { products as data, IProduct } from '../../../api/data';


interface LayoutProps {
}

// interface IModals {
//   [key: string]: boolean
// }
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  // const [products, setProducts] = useState<undefined | [IProduct]>(undefined)
  const [menuIsOpen, setMenu] = useState<boolean>(false)
  const [modals, setModals] = useState({
    "cart": false,
    "menu": false
  });
  const [inCart, setInCart] = useState<undefined | [IProduct]>([data[0]])
  // useEffect(() => {
  //   setTimeout(() => setProducts(data), 3000)
  // }, [])
  const handleModal = (modal: string) => {
    switch (modal) {
      case 'cart':
        setModals({
          ...modals,
          // todo: setar o estado de forma dinâmica
          [modal]: !modals[modal]
        })
        break;

      case 'menu': 
        setModals({
          ...modals,
          // todo: setar o estado de forma dinâmica
          [modal]: !modals[modal]
        })
        break;

      default:
        break;
    }
  }

  return (
    <body>
      {modals['menu'] ? (
        <MobileMenu handleClose={() => handleModal('menu')}/>
      ) : null}
      <Header handleModal={handleModal}/>
      {modals.cart && (
        <Cart products={inCart} handleClose={() => handleModal('cart')}/>
      )}
      {children}
      
    </body>
   );
}
 
export default Layout;