import React from "react";
import "./Compose.css";
import { useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
const Compose = () => {
  const dispatch = useDispatch();
  return (
    <div className="container composeBox">
      <div className="row justify-content-between composeHeading">
        <div className="col-4">
          <h6>New Message</h6>
        </div>
        <div
          className="col-1"
          onClick={() => dispatch(inboxSliceAction.composeAction(false))}
        >
          <h6>X</h6>
        </div>
      </div>
      <form>
        <div className="row composeRow">
          <div className="col-12">
            <label htmlFor="To">To</label>
            <input type="email" id="To" required className="composeInput" />
          </div>
        </div>
        <div className="row composeRow">
          <div className="col-12">
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="composeInputSubject" />
          </div>
        </div>
        <div className="row composeRow">
          <div className="col-12">
            <input type="text" className="composeInputBody" />
          </div>
        </div>
        <div className="row lastRow">
          <div className="col-2">
            <button type="submit" className="btn btn-primary sendButton">
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
