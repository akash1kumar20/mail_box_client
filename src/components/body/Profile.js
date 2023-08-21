import "./Profile.css";
import { useDispatch } from "react-redux";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import userImage from "./../../images/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const depend = JSON.parse(localStorage.getItem("userEmail"));
  const logOutFunctionality = (event) => {
    event.preventDefault();
    navigate("/");
    localStorage.clear();
    dispatch(inboxSliceAction.profileAction(false));
    window.location.reload(true);
  };
  return (
    <>
      <div className="container mt-2 profile">
        <div className="row justify-content-end">
          <div
            className="col-1 profileClose"
            onClick={() => dispatch(inboxSliceAction.profileAction(false))}
          >
            X
          </div>
        </div>
        <div className="row">
          <h5>{depend}</h5>
        </div>
        <div className="row justify-content-center">
          <img
            src={userImage}
            alt="User Profile Picture"
            className="profilePhoto"
          />
        </div>
        <div className="row">
          <h2>Hi, UserName!</h2>
        </div>
        <div className="row mb-2 pb-3 justify-content-center">
          <div className="col-4">
            <button
              className="btn btn-danger profileLogOut"
              onClick={logOutFunctionality}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
