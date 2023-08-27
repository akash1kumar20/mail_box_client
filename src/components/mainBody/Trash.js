import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSliders,
  faRefresh,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "./Trash.css";
import axios from "axios";
import useCustomHook from "../useCustomHook";
const Trash = () => {
  const emailValue = localStorage.getItem("userEmail");
  let changeEmail = emailValue.replace("@", "").replace(".", "");
  const [data] = useCustomHook(
    `https://new-project-2c75e-default-rtdb.firebaseio.com/deletedEmail${changeEmail}.json`
  );
  const clearTrash = async () => {
    try {
      let res = await axios.delete(
        `https://new-project-2c75e-default-rtdb.firebaseio.com/deletedEmail${changeEmail}.json`
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
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
      <h4 className="title">Trash</h4>
      <h6 className="trash2ndHeading">
        Messages that have been in Trash more than 30 days will be automatically
        deleted.
        <span className="emptyNow" onClick={clearTrash}>
          Empty Trash now
        </span>
      </h6>
      <div className="row trashRowHeading">
        <div className="col-4 ms-5">
          <h5>Sender</h5>
        </div>
        <div className="col-7 ms-4">
          <h5>Message</h5>
        </div>
      </div>
      {data &&
        data.map((mail) => (
          <div className="row mailRecieve" key={mail.id}>
            <div className="col-4 ms-3">
              <p>
                <FontAwesomeIcon icon={faTrash} className="me-2" />
                {mail.from}
              </p>
            </div>
            <div className="col-7 ms-4">
              <textarea
                defaultValue={mail.body}
                rows="1"
                cols="75"
                className="trashMessageBody"
              />
            </div>
          </div>
        ))}
    </>
  );
};

export default Trash;
