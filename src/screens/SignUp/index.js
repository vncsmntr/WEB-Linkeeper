import React from 'react';
import './styles.scss'
import { Link } from 'react-router-dom';


const SignUp = () => {
  return (
    <div className="container h-100 pt-5">
      <h1>Sign In</h1>
      <div className="d-flex flex-column h-100">
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control"></input>
          </div>
          <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control"></input>
        </div>
        <div className="form-group">
          <label>Password Confirmation</label>
          <input type="password" className="form-control"></input>
        </div>
        <div>
          <button className="btn btn-primary btn-round">Send</button>
        </div>
        </form>
        <div className="container text-center fixed-bottom pb-5">
          <div className="text muted">Already have an account?</div>
          <Link to="/sign-in">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;