import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./Sent.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
const Sent = () => {
  const [sentData, setSentData] = useState([]);
  useEffect(() => {
    const emailValue = JSON.parse(localStorage.getItem("mailSentTo"));
    const getData = async () => {
      try {
        let res = await axios.get(
          `https://new-project-2c75e-default-rtdb.firebaseio.com/emailSent${emailValue}.json`
        );

        let convertData = [];
        for (let key in res.data) {
          convertData.push({ ...res.data[key], id: key });
        }
        setSentData(convertData);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
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
      {sentData.map((sent) => (
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
