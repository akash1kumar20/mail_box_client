import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSliders,
  faRefresh,
  faStar,
  faTrash,
  faCircle,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Inbox.css";
import { useDispatch, useSelector } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import { useNavigate } from "react-router-dom";
import useCustomHook from "../useCustomHook";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Inbox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const trashIcon = useSelector((state) => state.inbox.trashIcon);
  const emailValue = localStorage.getItem("userEmail");
  let changeEmail = emailValue.replace("@", "").replace(".", "");
  const [data, arrayLength] = useCustomHook(
    `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${changeEmail}.json`
  );
  let count = 0;
  const readMessage = Number(localStorage.getItem("count"));
  const unreadMessage = arrayLength - readMessage;
  let length = arrayLength > 0;
  const mailToDelete = async (inbox) => {
    try {
      let res = await axios.delete(
        `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${changeEmail}/${inbox.id}.json`
      );
      toast.success("Mail Deleted", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    } catch (err) {
      toast.error("Please Try Again!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
      });
    }
    try {
      let res = await axios.post(
        `https://new-project-2c75e-default-rtdb.firebaseio.com/deletedEmail${changeEmail}.json`,
        inbox
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ToastContainer />
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
          <h5 className="ms-5 ps-3">Sender</h5>
        </div>
        <div className="col-5 bodyHeading ms-4">
          <h5 className="ms-5">Message </h5>
        </div>
      </div>
      {data &&
        data.map((inbox) => (
          <div key={inbox.id} className="row mailRecieve mb-1">
            <div className="col-3">
              <div className="row">
                <div className="col-4">
                  <b>
                    <span className="countValue">{inbox.read && count++}</span>
                    <FontAwesomeIcon icon={faStar} />
                    {!inbox.read && (
                      <FontAwesomeIcon
                        icon={faCircle}
                        className="blueDot ms-3 me-0"
                      />
                    )}
                  </b>
                </div>
                <div
                  className="col-8"
                  onMouseOver={() =>
                    dispatch(inboxSliceAction.trashIconAction(false))
                  }
                >
                  <strong>
                    {inbox.from}
                    {inbox.from == emailValue ? (
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="online"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="offline"
                      />
                    )}
                  </strong>
                  {localStorage.setItem("count", count)}
                  {localStorage.setItem("mailSentTo", inbox.to)}
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="row">
                <div
                  className="col-11"
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
                  <p className="inboxMessage"> {inbox.body}</p>
                  <p className="hide">Click on me to read the full message</p>
                </div>
                {trashIcon && (
                  <div className="col-1" onClick={() => mailToDelete(inbox)}>
                    <FontAwesomeIcon icon={faTrash} className="text-danger" />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Inbox;
