import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';


const NavTop = () => {
  const { handleNavigation } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-gradient  sticky-top">
      <span className='navbar-brand text-white'>
        <i className="fa-brands fa-react ms-5" style={{ fontSize: '2.5rem' }}></i>
      </span>
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ml-4">
            <li>
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('corousel')}>HOME</button>
            </li>
            <li>
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('about')}>ABOUT</button>
            </li>
            <li>
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('products')}>PRODUCTS</button>
            </li>
          </ul>

          <li className="nav-link">
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('cart')}>
                CART
              </button>
            </li>

            
          <ul className="navbar-nav ml-auto">
            <li className="nav-link">
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('signup')}>
                SIGNUP
              </button>
            </li>

            <li className="nav-link">
              <button className="nav-link fs-6 text-white me-4" onClick={()=>handleNavigation('login')}>
                LOGIN
              </button>
            </li>
          </ul>


        </div>
      </div>
    </nav>
  );
};

export default NavTop;
