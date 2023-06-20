import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './AuthContext';

const Cart = () => {
  const { selectedProduct, handleNavigation } = useContext(AuthContext);

  if (!selectedProduct) {
    return (
      <div className="container">
        <div className="card mt-5">
          <h1 className="card-header">Cart</h1>
          <div className="card-body">
            <p>No item in cart.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card mt-5">
        <h1 className="card-header">Cart</h1>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedProduct.name}</td>
                <td>{1}</td>
                <td>{selectedProduct.price}</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-primary"
              onClick={() => handleNavigation('checkout',selectedProduct)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
