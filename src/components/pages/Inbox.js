import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSliders,
  faRefresh,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Inbox.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const Inbox = () => {
  const [inboxMail, setInboxMail] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const emailValue = localStorage.getItem("userEmail");
      let changeEmail = emailValue.replace("@", "").replace(".", "");
      try {
        let res = await axios.get(
          `https://new-project-2c75e-default-rtdb.firebaseio.com/emailSent${changeEmail}.json`
        );
        console.log(res);
        const convertIntoArray = [];
        for (let key in res.data) {
          convertIntoArray.push({ ...res.data[key], id: key });
        }
        setInboxMail(convertIntoArray);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="mb-4 mt-2 icons ">
        <FontAwesomeIcon icon={faSquare} className="me-4 ms-1" />
        <FontAwesomeIcon
          icon={faRefresh}
          onClick={() => window.location.reload(true)}
        />
        <FontAwesomeIcon icon={faSliders} className="ms-4" />
      </div>
      <h4 className="title">Inbox</h4>
      <div className="row">
        <div className="col-2 ms-5">
          <h5>Sender</h5>
        </div>
        <div className="col-5 bodyHeading ms-4">
          <h5>Message</h5>
        </div>
      </div>
      {inboxMail.map((inbox) => (
        <div className="row mailRecieve">
          <div className="col-1">
            <p>
              <FontAwesomeIcon icon={faStar} />
            </p>
          </div>
          <div className="col-2 senderMail ms-2 me-5">
            <p>{inbox.to}</p>
          </div>
          <div className="col-6 ms-5">
            <p>{inbox.body}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Inbox;
