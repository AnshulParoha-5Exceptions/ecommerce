// // AuthContext.jsx
// import React, { createContext, useState } from 'react';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [showHome, setShowHome] = useState(false);
//   const [showAbout, setShowAbout] = useState(false);
//   const [showProducts, setShowProducts] = useState(false);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   const handleNavigation = (action,props) => {
//     setShowHome(action === 'home');
//     setShowAbout(action === 'about');
//     setShowProducts(action === 'products');
//     setShowCheckout(action === 'checkout');
//     setShowSignup(action === 'signup');
//     setShowLogin(action === 'login');
//   };

//   const contextValue = {
//     showHome,
//     showAbout,
//     showProducts,
//     showCheckout,
//     showSignup,
//     showLogin,
//     handleNavigation,
//   };

//   return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
// };






// AuthContext.jsx
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleNavigation = (page, product) => { 
    setCurrentPage(page);
    setSelectedProduct(product);
  };

  const contextValue = {
    currentPage,
    selectedProduct,
    handleNavigation,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};
