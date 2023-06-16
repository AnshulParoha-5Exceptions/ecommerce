import React from 'react'

const Login = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 bg-light border rounded">
          <form>
            <h3 className="text-center mt-3">Login</h3>
            
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input type="password" name="pwd" className="form-control" />
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