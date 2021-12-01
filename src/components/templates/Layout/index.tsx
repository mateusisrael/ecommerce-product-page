import { FunctionComponent } from 'react';
import Header from '../../organisms/Header';


interface LayoutProps {
}
 
const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <body>
      <Header />
      {children}
      
    </body>
   );
}
 
export default Layout;