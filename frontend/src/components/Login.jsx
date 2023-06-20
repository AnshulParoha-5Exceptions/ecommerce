import axios from 'axios';
import React, { useState } from 'react'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) =>{
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const handleSumbit = async (e) =>{
    e.preventDefault();
    try{
      const response  = await axios.post('http://localhost/projects/ecomm/backend/login.php',formData);
      if (response.data.status === 'error' && response.data.message === 'Invalid email or password'){
        alert(response.data.message)
      }else{
        alert(response.data.message)
      }
      console.log(response.data.user_id, response.data.user_name);
      setFormData({
        email: '',
        password: '',
      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 bg-light border rounded">
          <form onSubmit={handleSumbit}>
            <h3 className="text-center mt-3">Login</h3>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input 
              type="email" 
              name="email" 
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              required
               />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input 
              type="password" 
              name="password" 
              className="form-control"
              value={formData.password}
              onChange={handleInputChange}
              required />
            </div>
            <div className="d-grid gap-2 mt-3 mb-5">
              <button className="btn btn-primary btn-block" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  )
}

export default Login