import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStamp } from "@fortawesome/free-solid-svg-icons";
import imgToUse from "./../../images/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png";
import "./SingleMail.css";
import axios from "axios";
import useEmailHook from "../useEmailHook";
const SingleMail = () => {
  const navigate = useNavigate();
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

  const dataLocalStorage = JSON.parse(localStorage.getItem("mailRecieve"));
  let id = dataLocalStorage.id;
  const [changeEmail] = useEmailHook();

  useEffect(() => {
    const handleMail = async () => {
      let updateData = {
        body: dataLocalStorage.body,
        to: dataLocalStorage.to,
        subject: dataLocalStorage.subject,
        read: dataLocalStorage.read,
        from: dataLocalStorage.from,
        date: dataLocalStorage.date,
      };

      try {
        let res = await axios.put(
          `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${changeEmail}/${id}.json`,
          updateData
        );
      } catch (err) {
        console.log(err);
      }
    };
    handleMail();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container singleMailBody">
        <div className="row mt-1 mb-2 justify-content-between">
          <div className="col-5">
            <h5>
              <FontAwesomeIcon icon={faStamp} className="me-3 ms-4" />
              {dataLocalStorage.subject}
              <span className="singleMailInboxTag "> Inbox</span>
            </h5>
          </div>
          <div className="col-1">
            <button
              className="btn btn-primary"
              onClick={() =>
                setTimeout(() => {
                  navigate("/inbox");
                }, 500)
              }
            >
              Back
            </button>
          </div>
        </div>
        <div className="row mt-2 mb-2 justify-content-between">
          <div className="col-4">
            <p>
              <img
                src={imgToUse}
                alt="Dummy image"
                height="70px"
                width="70px"
                className="me-3"
              />
              <strong> {dataLocalStorage.to}</strong>
            </p>
          </div>
          <div className="col-4 mt-4 ps-5">
            <strong className="ps-5"> {dataLocalStorage.date}</strong>
          </div>
        </div>
        <div className="row ms-3 me-3 singleMailMessage">
          <strong className="singleMailMessageHeading">Message</strong>
          <p className="mt-2"> {dataLocalStorage.body}</p>
        </div>
      </div>
    </>
  );
};

export default SingleMail;
