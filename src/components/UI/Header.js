import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import mHeading from "./../../../src/images/logo_gmail_lockup_dark_1x_r5.png";
import { inboxSliceAction } from "../../redux_store/inboxElementSlice";
import { useDispatch } from "react-redux";
import { canvasAction } from "../../redux_store/canvasSlice";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const activeCanvas = () => {
    dispatch(canvasAction.showCanvas());
    dispatch(canvasAction.activeCanvas());
  };

  return (
    <div className="topPart">
      <h3 className="pt-2 ms-3">
        <FontAwesomeIcon
          icon={faBars}
          className="text-white me-3 ms-2"
          onClick={activeCanvas}
        />
        <img src={mHeading} alt="M" height="45px" className="me-4" />
        <input
          type="search"
          placeholder="Search mail"
          className="search text-white"
        />
        <FontAwesomeIcon
          icon={faUser}
          className="user"
          onClick={() => dispatch(inboxSliceAction.profileAction(true))}
        />
      </h3>
    </div>
  );
};

export default Header;
