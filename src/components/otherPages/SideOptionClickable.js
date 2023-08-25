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
  const inboxHandler = () => {
    dispatch(inboxSliceAction.inboxAaction(true));
    dispatch(inboxSliceAction.starAction(false));
    dispatch(inboxSliceAction.sentAction(false));
    dispatch(inboxSliceAction.draftAction(false));
    dispatch(inboxSliceAction.trashAction(false));
  };
  const starHandler = () => {
    dispatch(inboxSliceAction.starAction(true));
    dispatch(inboxSliceAction.inboxAaction(false));
    dispatch(inboxSliceAction.sentAction(false));
    dispatch(inboxSliceAction.draftAction(false));
    dispatch(inboxSliceAction.trashAction(false));
  };
  const sentHandler = () => {
    dispatch(inboxSliceAction.sentAction(true));
    dispatch(inboxSliceAction.starAction(false));
    dispatch(inboxSliceAction.inboxAaction(false));
    dispatch(inboxSliceAction.draftAction(false));
    dispatch(inboxSliceAction.trashAction(false));
  };
  const draftHandler = () => {
    dispatch(inboxSliceAction.draftAction(true));
    dispatch(inboxSliceAction.sentAction(false));
    dispatch(inboxSliceAction.starAction(false));
    dispatch(inboxSliceAction.inboxAaction(false));
    dispatch(inboxSliceAction.trashAction(false));
  };
  const trashHandler = () => {
    dispatch(inboxSliceAction.trashAction(true));
    dispatch(inboxSliceAction.draftAction(false));
    dispatch(inboxSliceAction.sentAction(false));
    dispatch(inboxSliceAction.starAction(false));
    dispatch(inboxSliceAction.inboxAaction(false));
  };
  return (
    <div className="icons mt-4 sideOptionClickable">
      <h3
        className="compose elements"
        onClick={() => dispatch(inboxSliceAction.composeAction(true))}
      >
        <FontAwesomeIcon icon={faPencil} className="mb-1 me-1" />
        <span> Compose</span>
      </h3>
      <h5 onClick={inboxHandler} className="elements">
        <FontAwesomeIcon icon={faInbox} className="mb-1 me-3" />
        <span> Inbox</span>
      </h5>
      <h5 onClick={starHandler} className="elements">
        <FontAwesomeIcon icon={faStar} className="mb-1 me-3" />
        <span> Star</span>
      </h5>
      <h5 className="elements" onClick={sentHandler}>
        <FontAwesomeIcon icon={faPaperPlane} className="mb-1 me-3" />
        <span> Sent</span>
      </h5>
      <h5 className="elements" onClick={draftHandler}>
        <FontAwesomeIcon icon={faBookmark} className="mb-1 me-3" />
        <span> Draft</span>
      </h5>
      <h5 className="elements" onClick={trashHandler}>
        <FontAwesomeIcon icon={faTrashCan} className="me-3" />
        <span>Trash</span>
      </h5>
    </div>
  );
};

export default SideOptionClickable;
