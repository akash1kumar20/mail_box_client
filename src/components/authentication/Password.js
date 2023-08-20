import React, { useRef, useEffect } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "./Google";
const Password = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const depend = localStorage.getItem("userEmail");
    if (!depend) {
      alert("Currently you don not have access of this page");
      navigate("/");
      return;
    }
  }, []);
  const passwordRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    let passwordValue = passwordRef.current.value;
    console.log("password", passwordValue);
  };
  return (
    <Card>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Google />
          </div>
        </div>

        <div className="row mb-2">
          <form onSubmit={formHandler}>
            <input
              type="password"
              required
              placeholder="Enter Your Password"
              ref={passwordRef}
            />

            <p className="forgot" onClick={() => navigate("/forgotPassword")}>
              Forgot password?
            </p>

            <div className="row mb-5 mt-3 justify-content-between">
              <div className="col-sm-6 create">
                <p
                  className="text-primary fs-5"
                  onClick={() => navigate("/signup")}
                >
                  Create account
                </p>
              </div>

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
export default Password;
