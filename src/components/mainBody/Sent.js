import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Sent.css";
import useCustomHook from "../useCustomHook";
const Sent = () => {
  const senderMail = localStorage.getItem("mailSentTo");
  const convertSenderMail = senderMail.replace("@", "").replace(".", "");
  const [data] = useCustomHook(
    `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentFrom${convertSenderMail}.json`
  );

  return (
    <>
      <h4 className="title mt-5">Sent</h4>
      <div className="row">
        <div className="col-3 ms-4 sentHeading">
          <h5>Sent To</h5>
        </div>
        <div className="col-5 ms-5 sentMessageHeading">
          <h5>Message</h5>
        </div>
      </div>
      {data &&
        data.map((sent) => (
          <div className="row" key={sent.id}>
            <div className="col-1">
              <FontAwesomeIcon icon={faCircle} />
            </div>
            <div className="col-3 ">
              <p>{sent.to}</p>
            </div>
            <div className="col-7 ">
              <textarea defaultValue={sent.body} rows={1} cols={75} />
            </div>
          </div>
        ))}
    </>
  );
};

export default Sent;
