import React, { useRef, useState } from "react";
import "./Compose.css";
import { useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import JoditEditor from "jodit-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Compose = () => {
  const editor = useRef(null);
  const emailRef = useRef();
  const subjectRef = useRef();
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  //to convert message in a proper format:
  const sanitizeHTML = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  const composeMailHandler = async (event) => {
    event.preventDefault();
    const sanitizedBody = sanitizeHTML(content);
    const senderEmail = localStorage.getItem("userEmail");
    const dataSent = {
      to: emailRef.current.value,
      subject: subjectRef.current.value,
      body: sanitizedBody,
      from: senderEmail,
      date: new Date(),
    };
    let sentTo = dataSent.to.replace("@", "").replace(".", "");
    let recieveFrom = dataSent.from.replace("@", "").replace(".", "");

    try {
      let res = await axios.post(
        `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${sentTo}.json`,
        dataSent
      );
      console.log(res.data);
      toast.success("Email Sent!", {
        position: "top-right",
        theme: "colored",
        autoClose: 1000,
      });
      setTimeout(() => {
        dispatch(inboxSliceAction.composeAction(false));
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error("Please Try Again!", {
        position: "top-right",
        theme: "dark",
        autoClose: 2000,
      });
    }

    try {
      let res = await axios.post(
        `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentFrom${recieveFrom}.json`,
        dataSent
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <ToastContainer />
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
        <form onSubmit={composeMailHandler}>
          <div className="row composeRow">
            <div className="col-12">
              <label htmlFor="To">To</label>
              <input
                type="email"
                id="To"
                required
                className="composeInput ms-3"
                ref={emailRef}
              />
            </div>
          </div>
          <div className="row composeRow">
            <div className="col-12">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="composeInputSubject ms-3"
                ref={subjectRef}
              />
            </div>
          </div>
          <div className="row composeRow">
            <div className="col-12 composeInputBody">
              <JoditEditor
                ref={editor}
                value={content}
                required
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
    </>
  );
};

export default Compose;
