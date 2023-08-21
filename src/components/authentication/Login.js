import React, { useRef } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "./Google";
import { loginComponentsSliceActions } from "../../redux_store/loginComponents";
import { useDispatch } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const formHandler = (event) => {
    event.preventDefault();
    let emailValue = emailRef.current.value;
    dispatch(loginComponentsSliceActions.addData(emailValue));
    navigate("/password");
    dispatch(loginComponentsSliceActions.loginStatus(true));
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
              type="text"
              required
              placeholder="Email or Phone"
              ref={emailRef}
            />
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

export default Login;
