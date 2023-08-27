import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faInbox,
  faStar,
  faPaperPlane,
  faBookmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import "./SideOptionClickable.css";
const SideOptionClickable = () => {
  const dispatch = useDispatch();

  return (
    <div className="icons mt-4 sideOptionClickable">
      <h3
        className="compose elements"
        onClick={() => dispatch(inboxSliceAction.composeAction(true))}
      >
        <FontAwesomeIcon icon={faPencil} className="mb-1 me-1" />
        <span> Compose</span>
      </h3>
      <h5
        onClick={() => dispatch(inboxSliceAction.componentOpenAction("inbox"))}
        className="elements"
      >
        <FontAwesomeIcon icon={faInbox} className="mb-1 me-3" />
        <span> Inbox</span>
      </h5>
      <h5
        onClick={() => dispatch(inboxSliceAction.componentOpenAction("star"))}
        className="elements"
      >
        <FontAwesomeIcon icon={faStar} className="mb-1 me-3" />
        <span> Star</span>
      </h5>
      <h5
        className="elements"
        onClick={() => dispatch(inboxSliceAction.componentOpenAction("sent"))}
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mb-1 me-3" />
        <span> Sent</span>
      </h5>
      <h5
        className="elements"
        onClick={() => dispatch(inboxSliceAction.componentOpenAction("draft"))}
      >
        <FontAwesomeIcon icon={faBookmark} className="mb-1 me-3" />
        <span> Draft</span>
      </h5>
      <h5
        className="elements"
        onClick={() => dispatch(inboxSliceAction.componentOpenAction("trash"))}
      >
        <FontAwesomeIcon icon={faTrashCan} className="me-3" />
        <span>Trash</span>
      </h5>
    </div>
  );
};

export default SideOptionClickable;
