import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSliders,
  faRefresh,
  faStar,
  faTrash,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Inbox.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import { useNavigate } from "react-router-dom";
const Inbox = () => {
  const [inboxMail, setInboxMail] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const emailValue = localStorage.getItem("userEmail");
      let changeEmail = emailValue.replace("@", "").replace(".", "");
      try {
        let res = await axios.get(
          `https://new-project-2c75e-default-rtdb.firebaseio.com/emailSent${changeEmail}.json`
        );
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
  });
  let count = 0;
  const readMessage = Number(localStorage.getItem("count")) + 1;
  const unreadMessage = inboxMail.length - readMessage;
  const dispatch = useDispatch();
  const trashIcon = useSelector((state) => state.inbox.trashIcon);
  return (
    <>
      <div className="mb-4 mt-2 icons row justify-content-between">
        <div className="col-4">
          <FontAwesomeIcon icon={faSquare} className="me-4 ms-1" />
          <FontAwesomeIcon
            icon={faRefresh}
            onClick={() => window.location.reload(true)}
          />
          <FontAwesomeIcon icon={faSliders} className="ms-4" />
        </div>
        <div className="col-3 unreadMessage">
          <span>Unread {unreadMessage}</span>
        </div>
      </div>
      <h4 className="title">Inbox</h4>
      <div className="row">
        <div className="col-2 ms-5">
          <h5 className="ms-5">Sender</h5>
        </div>
        <div className="col-5 bodyHeading ms-4">
          <h5 className="ms-5">Message</h5>
        </div>
      </div>
      {inboxMail.map((inbox) => (
        <div
          key={inbox.id}
          className="row mailRecieve"
          onClick={() => (
            navigate("/mail"),
            localStorage.setItem(
              "mailRecieve",
              JSON.stringify({
                ...inbox,
                read: true,
              })
            )
          )}
        >
          <div className="col-1">
            <FontAwesomeIcon icon={faStar} />
            {!inbox.read && (
              <FontAwesomeIcon icon={faCircle} className="blueDot" />
            )}
            {inbox.read && localStorage.setItem("count", count++)}
          </div>

          <div className="col-2 senderMail">
            <p>{inbox.to}</p>
          </div>
          <div
            className="col-7 ms-2"
            onMouseOver={() => dispatch(inboxSliceAction.trashIconAction(true))}
            onMouseOut={() => dispatch(inboxSliceAction.trashIconAction(false))}
          >
            <textarea
              defaultValue={inbox.body}
              cols="77"
              rows="1"
              className="inboxMessage"
            />
          </div>
          {trashIcon && (
            <div className="col-1">
              <FontAwesomeIcon icon={faTrash} className="text-dark" />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Inbox;
