import React, { useEffect } from "react";
import "./Mail.css";
import { useSelector, useDispatch } from "react-redux";
import { canvasAction } from "../../redux_store/canvasSlice";
import { useNavigate } from "react-router-dom";
import Profile from "../otherPages/Profile";
import Compose from "./Compose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideOption from "./../otherPages/SideOption";
import SideOptionClickable from "../otherPages/SideOptionClickable";
import MailActiveItem from "../otherPages/MailActiveItem";
import Header from "../UI/Header";
const Mail = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.inbox.profile);
  const compose = useSelector((state) => state.inbox.compose);
  const canvasState = useSelector((state) => state.canvas.canvasVisibility);
  const active = useSelector((state) => state.canvas.active);
  const depend = localStorage.getItem("userEmail");
  useEffect(() => {
    if (!depend) {
      toast.error("Please Login First!!!", {
        position: "top-center",
        theme: "dark",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/");
      }, 3000);
      return;
    }
  }, []);
  const dispatch = useDispatch();
  const closeCanvas = () => {
    if (active === true) {
      return;
    } else {
      dispatch(canvasAction.setCanvasVisibility(false));
    }
  };

  return (
    <>
      <ToastContainer />
      {profile && <Profile />}
      {compose && <Compose />}
      {depend && (
        <div className="mailBackground">
          <Header />
          <div className="row">
            {!canvasState && (
              <div
                className="col-1 ms-4 me-sm-5"
                onMouseOver={() => dispatch(canvasAction.showCanvas())}
              >
                <SideOption />
              </div>
            )}
            {canvasState && (
              <div
                className="col-2 ms-md-4"
                onMouseOut={() => dispatch(closeCanvas)}
              >
                <SideOptionClickable />
              </div>
            )}
            <>
              <MailActiveItem />
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Mail;
