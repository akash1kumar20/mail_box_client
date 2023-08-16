import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const emailRef = useRef();
  const navigate = useNavigate();
  const [createAccount, setCreateAccount] = useState(false);
  const [showpassword, setShowPassword] = useState(false);
  const formHandler = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    setShowPassword(true);
  };
  return (
    <Card>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>
              <span className="text-primary">G</span>
              <span className="text-danger">o</span>
              <span className="text-warning">o</span>
              <span className="text-primary">g</span>
              <span className="text-primary">l</span>
              <span className="text-danger">e</span>
            </h3>
            {!createAccount && <p className="mt-3 fs-4">Sign in</p>}
            {createAccount && (
              <p className="mt-3 fs-4">Create a Google Account</p>
            )}
            {!createAccount && <p className="fs-5">to continue to Gmail</p>}
            {createAccount && <p className="fs-5">Enter your details</p>}
          </div>
        </div>

        <div className="row mb-2">
          <form onSubmit={formHandler}>
            {createAccount && (
              <div>
                <input
                  type="text"
                  required
                  placeholder="Enter Your Name"
                  className="mb-3"
                />
                <input type="email" required placeholder="Enter Your Email" />
              </div>
            )}
            {!createAccount && !showpassword && (
              <input
                type="text"
                required
                placeholder="Email or Phone"
                ref={emailRef}
              />
            )}
            {!createAccount && showpassword && (
              <input
                type="password"
                required
                placeholder="Enter Your Password"
                ref={emailRef}
              />
            )}

            {!createAccount && showpassword && (
              <p className="forgot" onClick={() => navigate("/forgotPassword")}>
                Forgot password?
              </p>
            )}

            <div className="row mb-5 mt-3 justify-content-between">
              {!createAccount && (
                <div className="col-sm-6 create">
                  <p
                    className="text-primary fs-5"
                    onClick={() => setCreateAccount(true)}
                  >
                    Create account
                  </p>
                </div>
              )}
              {createAccount && (
                <div className="col-sm-6 create">
                  <p
                    className="text-primary fs-5"
                    onClick={() => setCreateAccount(false)}
                  >
                    Canel
                  </p>
                </div>
              )}
              <div className="col-sm-4 next">
                <button className="ps-3 pe-3 btn btn-primary" type="submit">
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Login;
