import React, { useState } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginComponentsSliceActions } from "../../redux_store/loginComponents";
import { TextField } from "@mui/material";
const CrateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formHandler = (event) => {
    event.preventDefault();
    const emailValue = name;
    const nameValue = email;
    console.log(emailValue, nameValue);
    localStorage.setItem("beforeAuth", JSON.stringify(emailValue));
    dispatch(loginComponentsSliceActions.addData(emailValue));
    dispatch(loginComponentsSliceActions.loginStatus(false));
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
              <TextField
                type="text"
                label="Enter Your Name"
                variant="filled"
                className="textField"
                margin="normal"
                onChange={(event) => setName(event.target.value)}
                required
              />
              <TextField
                type="email"
                label="Enter Your Email"
                variant="filled"
                className="textField"
                margin="normal"
                onChange={(event) => setEmail(event.target.value)}
                required
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
