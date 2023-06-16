import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
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
                <td>Item 1</td>
                <td>2</td>
                <td>$20</td>
              </tr>
              <tr>
                <td>Item 2</td>
                <td>1</td>
                <td>$15</td>
              </tr>
              <tr>
                <td>Item 3</td>
                <td>3</td>
                <td>$30</td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

