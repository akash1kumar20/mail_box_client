import Inbox from "./../mainBody/Inbox";
import Star from "./../mainBody/Star";
import Sent from "./../mainBody/Sent";
import Trash from "./../mainBody/Trash";
import Draft from "./../mainBody/Draft";
import { useSelector, useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
const MailActiveItem = () => {
  const openComponet = useSelector((state) => state.inbox.componentOpen);
  const dispatch = useDispatch();

  return (
    <div
      className="col-9 inboxBox ms-md-5 ms-sm-2"
      onMouseOver={() => dispatch(inboxSliceAction.profileAction(false))}
    >
      {openComponet === "inbox" && <Inbox />}
      {openComponet === "trash" && <Trash />}
      {openComponet === "star" && <Star />}
      {openComponet === "sent" && <Sent />}
      {openComponet === "draft" && <Draft />}
    </div>
  );
};

export default MailActiveItem;
