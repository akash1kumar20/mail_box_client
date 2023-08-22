import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquare,
  faSliders,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";
const Star = () => {
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
      <h4 className="title">Star</h4>
      <div className="row">
        <div className="col-2 ms-5">
          <h5>Sender</h5>
        </div>
        <div className="col-5 bodyHeading ms-4">
          <h5>Message</h5>
        </div>
      </div>
      <div className="row mailRecieve">
        <div className="col-3 senderMail ms-5">
          <p>akashkumar2101sm@gmail.com</p>
        </div>
        <div className="col-8 ms-4">
          <p>
            A message is going to be display here, when sender sends the email
            and reciever recieves the email
          </p>
        </div>
      </div>
    </>
  );
};

export default Star;
