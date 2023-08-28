import React, { useState } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "./Google";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginComponentsSliceActions } from "../../redux_store/loginComponents";
import { TextField } from "@mui/material";
const Password = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.loginComponents.data);
  if (!userEmail) {
    toast.error("Please enter valid email first!", {
      theme: "dark",
      position: "top-center",
      autoClose: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }
  const isLogIn = useSelector((state) => state.loginComponents.isLogIn);
  const [password, setPassword] = useState("");
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const formHandler = async (event) => {
    event.preventDefault();
    let passwordValue = password;
    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJ5XbJIHerfHUmE6pHArpyhihfhDqVNQs";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJ5XbJIHerfHUmE6pHArpyhihfhDqVNQs";
    }
    try {
      let res = await axios.post(url, {
        email: userEmail,
        password: passwordValue,
        returnSecureToken: true,
      });
      dispatch(loginComponentsSliceActions.login(res.data));
      if (isLogIn) {
        toast.success("Welcome Back!!!", {
          position: "top-right",
          theme: "colored",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/inbox");
        }, 2500);
      } else {
        toast.success("Account Created Successfully!!!", {
          position: "top-right",
          theme: "dark",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/inbox");
        }, 2500);
      }
    } catch (err) {
      console.log(err);
      toast.error("Please Try Again, with right credentials!", {
        theme: "dark",
        position: "top-right",
        autoClose: 2000,
      });
      if (isLogIn) {
        setTimeout(() => {
          navigate("/");
        }, 2500);
      } else {
        setTimeout(() => {
          navigate("/signup");
        }, 2500);
      }
    }
  };
  return (
    <>
      <ToastContainer />
      <Card>
        {userEmail && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Google />
              </div>
            </div>

            <div className="row mb-2">
              <form onSubmit={formHandler}>
                <TextField
                  type="password"
                  label="Enter Your Password"
                  variant="filled"
                  className="textField"
                  margin="normal"
                  onChange={passwordHandler}
                  required
                />

                <p
                  className="forgot"
                  onClick={() => navigate("/forgotPassword")}
                >
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
        )}
      </Card>
    </>
  );
};
export default Password;
