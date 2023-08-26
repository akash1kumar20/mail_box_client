import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const TrashAction = () => {
  const trashAction = useSelector((state) => state.inbox.trashAction);
  let dataToDelete;
  let id;
  if (trashAction) {
    dataToDelete = JSON.parse(localStorage.getItem("dataToDelete"));
    id = dataToDelete.id;
  }
  useEffect(() => {
    const emailValue = localStorage.getItem("userEmail");
    let changeEmail = emailValue.replace("@", "").replace(".", "");
    const deleteData = async () => {
      if (trashAction) {
        try {
          let res = await axios.post(
            `https://new-project-2c75e-default-rtdb.firebaseio.com/deletedEmail${changeEmail}.json`,
            dataToDelete
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
