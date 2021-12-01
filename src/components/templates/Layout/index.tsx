import { FunctionComponent, useEffect, useState } from 'react';
import Header from '../../organisms/Header';
import Cart from '../../organisms/Cart' 

import { products as data, IProduct } from '../../../api/data';


interface LayoutProps {
}

// interface IModals {
//   [key: string]: boolean
// }
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  // const [products, setProducts] = useState<undefined | [IProduct]>(undefined)
  const [modals, setModals] = useState({
    "cart": false,
    "menu": false
  });
  // const [cartModal, setCartModal] = useState(false);
  const [inCart, setInCart] = useState<undefined | [IProduct]>([data[0]])
  // useEffect(() => {
  //   setTimeout(() => setProducts(data), 3000)
  // }, [])

  const handleModal = (modal: string) => {
    // const newModals = modals
    // newModals[modal] = !newModals[modal]
    setModals({
      ...modals,
      [modal]: !modals['cart']
    })
  }

  return (
    <body>
      <Header handleModal={handleModal}/>
      {modals.cart && (
        <Cart products={inCart}/>
      )}
      {children}
      
    </body>
   );
}
 
export default Layout;