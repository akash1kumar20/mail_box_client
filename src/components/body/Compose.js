import React, { useRef, useState } from "react";
import "./Compose.css";
import { useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import JoditEditor from "jodit-react";
const Compose = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
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
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => setContent(newContent)}
            />
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
