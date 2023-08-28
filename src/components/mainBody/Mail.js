import React, { useEffect } from "react";
import "./Mail.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Profile from "../otherPages/Profile";
import Compose from "./Compose";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MailActiveItem from "../otherPages/MailActiveItem";
import Header from "../UI/Header";
import SideOptioAction from "../otherPages/SideOptioAction";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
const Mail = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.inbox.profile);
  const compose = useSelector((state) => state.inbox.compose);
  const dispatch = useDispatch();
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
    } else {
      dispatch(inboxSliceAction.componentOpenAction("inbox"));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      {profile && <Profile />}
      {compose && <Compose />}
      {depend && (
        <div className="mailBackground">
          <Header />
          <div className="row">
            <SideOptioAction />
            <MailActiveItem />
          </div>
        </div>
      )}
    </>
  );
};

export default Mail;
