import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Mail.css";
import mHeading from "./../../../src/images/logo_gmail_lockup_dark_1x_r5.png";
import { useSelector, useDispatch } from "react-redux";
import { canvasAction } from "../../redux_store/canvasSlice";
import { useNavigate } from "react-router-dom";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import Profile from "./Profile";
import Compose from "./Compose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inbox from "../pages/Inbox";
import Star from "../pages/Star";
import SideOption from "../pages/SideOption";
import SideOptionClickable from "../pages/SideOptionClickable";
import Sent from "../pages/Sent";
import SingleMail from "./SingleMail";
const Mail = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.inbox.profile);
  const compose = useSelector((state) => state.inbox.compose);
  const star = useSelector((state) => state.inbox.star);
  const inbox = useSelector((state) => state.inbox.inbox);
  const sent = useSelector((state) => state.inbox.sent);
  const singleMail = useSelector((state) => state.inbox.singleMail);
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
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const canvasState = useSelector((state) => state.canvas.canvasVisibility);
  const activeCanvas = () => {
    dispatch(canvasAction.showCanvas());
    setActive((prevState) => !prevState);
  };
  const closeCanvas = () => {
    if (active === true) {
      return;
    } else {
      dispatch(canvasAction.showCanvas());
    }
  };

  return (
    <>
      <ToastContainer />
      {profile && <Profile />}
      {compose && <Compose />}
      {depend && (
        <div className="mailBackground">
          <div className="topPart">
            <h3 className="pt-2 ms-3">
              <FontAwesomeIcon
                icon={faBars}
                className="text-white me-3 ms-2"
                onClick={activeCanvas}
              />
              <img src={mHeading} alt="M" height="45px" className="me-4" />
              <input
                type="search"
                placeholder="Search mail"
                className="search text-white"
              />
              <FontAwesomeIcon
                icon={faUser}
                className="user"
                onClick={() => dispatch(inboxSliceAction.profileAction(true))}
              />
            </h3>
          </div>

          <div className="row">
            {singleMail && <SingleMail />}
            {!singleMail && (
              <>
                {!canvasState && (
                  <div
                    className="col-1 ms-4 me-sm-5"
                    onMouseOver={() => dispatch(canvasAction.showCanvas())}
                  >
                    <SideOption />
                  </div>
                )}
                {canvasState && (
                  <div className="col-2 ms-md-4" onMouseOut={closeCanvas}>
                    <SideOptionClickable />
                  </div>
                )}
                <div
                  className="col-9 inboxBox ms-md-5 ms-sm-2"
                  onMouseOver={() =>
                    dispatch(inboxSliceAction.profileAction(false))
                  }
                >
                  {!star && !sent && <Inbox />}
                  {star && !inbox && !sent && <Star />}
                  {sent && !inbox && !star && <Sent />}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Mail;
