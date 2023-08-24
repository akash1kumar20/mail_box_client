import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Sent.css";
const Draft = () => {
  return (
    <>
      <h4 className="title mt-5">Draft</h4>
      <div className="row">
        <div className="col-2 ms-5 sentHeading">
          <h5>Sent To</h5>
        </div>
        <div className="col-5 ms-5 sentMessageHeading">
          <h5>Message</h5>
        </div>
      </div>
      <div className="row ">
        <div className="col-1">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className="col-3 ms-2">
          <p>If Sent To Present</p>
        </div>
        <div className="col-6">
          <p>Message Display Here</p>
        </div>
      </div>
    </>
  );
};

export default Draft;
