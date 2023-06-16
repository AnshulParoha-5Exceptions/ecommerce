import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const handleInputChange = (e) =>{
    setFormData((prevState)=>({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      alert("Password doesn't matched..!")
    } else {
      console.log(formData)
    }
  }
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 bg-light border rounded">
          <form onSubmit={handleSubmit}>
            <h3 className="text-center mt-3">Create Account</h3>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" name="password" className="form-control" value={formData.password} onChange={handleInputChange}/>
            </div>
            <div className="form-group">
              <label className="form-label">Re-Enter Password</label>
              <input type="password" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleInputChange}/>
            </div>
            <div className="d-grid gap-2 mt-3 mb-5">
              <button className="btn btn-primary btn-block" type="submit">
                Signup
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Signup;



