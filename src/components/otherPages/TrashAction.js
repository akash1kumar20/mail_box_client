import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const TrashAction = () => {
  const trashAction = useSelector((state) => state.inbox.trashAction);
  const [data, setData] = useState();
  const [id, setId] = useState(null);
  useEffect(() => {
    const dataToDelete = JSON.parse(localStorage.getItem("dataToDelete"));
    setData(dataToDelete);
    setId(dataToDelete.id);
  }, []);
  useEffect(() => {
    const emailValue = localStorage.getItem("userEmail");
    let changeEmail = emailValue.replace("@", "").replace(".", "");
    const deleteData = async () => {
      if (trashAction) {
        try {
          let res = await axios.post(
            `https://new-project-2c75e-default-rtdb.firebaseio.com/deletedEmail${changeEmail}.json`,
            data
          );
          console.log(res);
        } catch (err) {
          console.log(err);
        }
        try {
          let res = await axios.delete(
            `https://new-project-2c75e-default-rtdb.firebaseio.com/dataSentTo${changeEmail}/${id}.json`
          );
        } catch (err) {
          console.log(err);
        }
      }
    };
    deleteData();
    setInterval(deleteData, 2000);
  }, []);
};

export default TrashAction;
