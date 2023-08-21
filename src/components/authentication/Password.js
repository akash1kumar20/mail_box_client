import React, { useRef, useEffect } from "react";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "./Google";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Password = () => {
  const navigate = useNavigate();
  const depend = localStorage.getItem("userEmail");
  const userEmail = useSelector((state) => state.loginComponents.data);
  const isLogIn = useSelector((state) => state.loginComponents.isLogIn);
  console.log(userEmail, isLogIn);
  useEffect(() => {
    if (!depend) {
      alert("Currently you don not have access of this page");
      navigate("/");
      return;
    }
  }, []);
  const passwordRef = useRef();
  const formHandler = async (event) => {
    event.preventDefault();
    let passwordValue = passwordRef.current.value;
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
      console.log(res.data);
      if (isLogIn) {
        toast.success("Welcome Back!!!", {
          position: "top-right",
          theme: "light",
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
        {depend && (
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
