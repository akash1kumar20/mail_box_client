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
import { useDispatch, useSelector } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import { useNavigate } from "react-router-dom";
import TrashAction from "./../otherPages/TrashAction";
import useCustomHook from "../useCustomHook";
import { useMemo } from "react";
import { useCallback } from "react";
const Inbox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trashIcon = useSelector((state) => state.inbox.trashIcon);
  const trashAction = useSelector((state) => state.inbox.trashAction);
  const emailValue = localStorage.getItem("userEmail");
  let changeEmail = emailValue.replace("@", "").replace(".", "");
  const [data, arrayLength] = useCustomHook(
    `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${changeEmail}.json`
  );
  let count = 0;
  const readMessage = Number(localStorage.getItem("count"));
  const unreadMessage = arrayLength - readMessage;
  let length = arrayLength > 0;
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
          {length && <span>Unread {unreadMessage}</span>}
        </div>
      </div>
      <h4 className="title">Inbox</h4>
      <div className="row">
        <div className="col-2 ms-5">
          <h5 className="ms-5">Sender</h5>
        </div>
        <div className="col-5 bodyHeading ms-4">
          <h5 className="ms-5">Message </h5>
        </div>
      </div>
      {data &&
        data.map((inbox) => (
          <div key={inbox.id} className="row mailRecieve">
            <div className="col-1">
              <span className="countValue">{inbox.read && count++}</span>
              <FontAwesomeIcon icon={faStar} />
              {!inbox.read && (
                <FontAwesomeIcon icon={faCircle} className="blueDot" />
              )}
            </div>
            <div
              className="col-2 senderMail"
              onMouseOver={() =>
                dispatch(inboxSliceAction.trashIconAction(false))
              }
            >
              <p>
                {inbox.from}
                {inbox.from == emailValue ? (
                  <span className="online">Online</span>
                ) : (
                  <span className="offline">Offline</span>
                )}
              </p>
              {localStorage.setItem("count", count)}
              {localStorage.setItem("mailSentTo", inbox.to)}
            </div>
            <div
              className="col-7 ms-2"
              onClick={() => (
                localStorage.setItem(
                  "mailRecieve",
                  JSON.stringify({
                    ...inbox,
                    read: true,
                  })
                ),
                navigate("/mail")
              )}
              onMouseOver={() =>
                dispatch(inboxSliceAction.trashIconAction(true))
              }
            >
              <p className="inboxMessage">
                <strong className="me-1">{inbox.subject}</strong> {inbox.body}{" "}
              </p>
              <p className="hide">Click on me to read the full message</p>
            </div>
            {trashIcon && (
              <div className="col-1 ms-2">
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-dark"
                  onClick={() => (
                    dispatch(inboxSliceAction.trashActionHandler(true)),
                    localStorage.setItem("dataToDelete", JSON.stringify(inbox))
                  )}
                />
                {trashAction && <TrashAction inbox={inbox} />}
              </div>
            )}
          </div>
        ))}
    </>
  );
};

export default Inbox;
