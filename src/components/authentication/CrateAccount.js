import React, { useRef } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
const CrateAccount = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const navigate = useNavigate();
  const formHandler = (event) => {
    event.preventDefault();
    const emailValue = emailRef.current.value;
    const nameValue = nameRef.current.value;
    console.log(emailValue, nameValue);
    localStorage.setItem("userEmail", JSON.stringify(emailValue));
    navigate("/password");
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
            <p className="mt-3 fs-4">Create a Google Account</p>
            <p className="fs-5">Enter your details</p>
          </div>
        </div>
        <div className="row mb-2">
          <form onSubmit={formHandler}>
            <div>
              <input
                type="text"
                required
                placeholder="Enter Your Name"
                className="mb-3"
                ref={nameRef}
              />
              <input
                type="email"
                required
                placeholder="Enter Your Email"
                ref={emailRef}
              />
            </div>
            <div className="row mb-5 mt-3 justify-content-between">
              <div className="col-sm-6 create">
                <p className="text-primary fs-5" onClick={() => navigate("/")}>
                  Canel
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

export default CrateAccount;
