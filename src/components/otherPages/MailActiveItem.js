import Inbox from "./../mainBody/Inbox";
import Star from "./../mainBody/Star";
import Sent from "./../mainBody/Sent";
import Trash from "./../mainBody/Trash";
import Draft from "./../mainBody/Draft";
import { useSelector, useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
const MailActiveItem = () => {
  const star = useSelector((state) => state.inbox.star);
  const inbox = useSelector((state) => state.inbox.inbox);
  const sent = useSelector((state) => state.inbox.sent);
  const trash = useSelector((state) => state.inbox.trash);
  const draft = useSelector((state) => state.inbox.draft);
  const dispatch = useDispatch();

  return (
    <div
      className="col-9 inboxBox ms-md-5 ms-sm-2"
      onMouseOver={() => dispatch(inboxSliceAction.profileAction(false))}
    >
      {!star && !sent && !trash && !draft && <Inbox />}
      {star && !inbox && !sent && !trash && !draft && <Star />}
      {sent && !inbox && !star && !trash && !draft && <Sent />}
      {trash && !inbox && !star && !sent && !draft && <Trash />}
      {!trash && !inbox && !star && !sent && draft && <Draft />}
    </div>
  );
};

export default MailActiveItem;
