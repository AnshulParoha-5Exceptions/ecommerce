import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import OrderButton from './OrderButton';

const Checkout = () => {
  const { selectedProduct, handleNavigation } = useContext(AuthContext);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2>Billing Details</h2>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input type="text" className="form-control" id="city" placeholder="Enter your city" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">ZIP Code</label>
                  <input type="text" className="form-control" id="zip" placeholder="Enter your ZIP code" required />
                </div>
              </div>
              <hr className="my-4" />
              <h2>Payment Details</h2>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input type="text" className="form-control" id="cardNumber" placeholder="Enter your card number" required />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" placeholder="CVV" required />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <h2>Order Summary</h2>
            <div className="card mb-3">
              <div className="card-body">
                <img src={selectedProduct.image} alt="image" style={{ width: '100px' }} />
                <h5 className="card-title">Product : {selectedProduct.name}</h5>
                <p className="card-text">Quantity: {1}</p>
                <p className="card-text">Price: ₹ {selectedProduct.price}</p>
              </div>
            </div>
            <p className="text-end">Total: {selectedProduct.price}</p>
            <div className='d-flex justify-content-center'>
              <OrderButton />
              <button className="btn btn-danger rounded-pill ms-2" type="submit" onClick={() => handleNavigation('products')}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Checkout;






























// import React from 'react'
// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// import OrderButton from './OrderButton';


// const Checkout = () => {
//   const { selectedProduct, handleNavigation } = useContext(AuthContext);
  
//   return (
//     <section className="py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8">
//             <h2>Billing Details</h2>
//             <form>
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label  className="form-label">First Name</label>
//                   <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" required />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label  className="form-label">Last Name</label>
//                   <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" required />
//                 </div>
//               </div>
//               <div className="mb-3">
//                 <label  className="form-label">Email Address</label>
//                 <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
//               </div>
//               <div className="mb-3">
//                 <label  className="form-label">Address</label>
//                 <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
//               </div>
//               <div className="row">
//                 <div className="col-md-6 mb-3">
//                   <label  className="form-label">City</label>
//                   <input type="text" className="form-control" id="city" placeholder="Enter your city" required />
//                 </div>
//                 <div className="col-md-6 mb-3">
//                   <label  className="form-label">ZIP Code</label>
//                   <input type="text" className="form-control" id="zip" placeholder="Enter your ZIP code" required />
//                 </div>
//               </div>
//               <hr className="my-4" />
//                 <h2>Payment Details</h2>
//                 <div className="mb-3">
//                   <label  className="form-label">Card Number</label>
//                   <input type="text" className="form-control" id="cardNumber" placeholder="Enter your card number" required />
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label  className="form-label">Expiry Date</label>
//                     <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" required />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label  className="form-label">CVV</label>
//                     <input type="text" className="form-control" id="cvv" placeholder="CVV" required />
//                   </div>
//                 </div>
                
//             </form>
//           </div>
//           <div className="col-lg-4">
//             <h2>Order Summary</h2>
//             <div className="card mb-3">
//               <div className="card-body">
//                 <img src={selectedProduct.image} alt="image" style={{'width':'100px'}} />
//                 <h5 className="card-title">Product : {selectedProduct.name}</h5>
//                 <p className="card-text">Quantity: {1}</p>
//                 <p className="card-text">Price: {selectedProduct.price}</p>
//               </div>
//             </div>
//             <p className="text-end">Total: {selectedProduct.price}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Checkout


