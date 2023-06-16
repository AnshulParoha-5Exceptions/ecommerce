import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import Corousel from './Corousel';
import Signup from './Signup';
import Login from './Login';
import Products from './Products';
import Checkout from './Checkout';
import About from './About';
import Cart from './Cart';

const Section = () => {
  const { currentPage, selectedProduct } = useContext(AuthContext);
  let componentToRender;

  switch (currentPage) {
    case 'about':
      componentToRender = <About />;
      break;
    case 'products':
      componentToRender = <Products />;
      break;
    case 'signup':
      componentToRender = <Signup />;
      break;
    case 'login':
      componentToRender = <Login />;
      break;
    case 'checkout':
      componentToRender = <Checkout selectedProduct={selectedProduct} />;
      break;
    case 'cart':
      componentToRender = <Cart selectedProduct={selectedProduct} />;
      break;
    default:
      componentToRender = <Corousel />;
      break;
  }

  return <>{componentToRender}</>;
};

export default Section;