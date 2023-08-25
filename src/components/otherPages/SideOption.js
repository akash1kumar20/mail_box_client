import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faInbox,
  faStar,
  faPaperPlane,
  faBookmark,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const SideOption = () => {
  return (
    <div className="icons mt-4">
      <FontAwesomeIcon icon={faPencil} className="mb-3" />
      <br />
      <FontAwesomeIcon icon={faInbox} className="mb-3" />
      <br />
      <FontAwesomeIcon icon={faStar} className="mb-3" />
      <br />
      <FontAwesomeIcon icon={faPaperPlane} className="mb-3" />
      <br />
      <FontAwesomeIcon icon={faBookmark} className="mb-3" />
      <br />
      <FontAwesomeIcon icon={faTrashCan} />
    </div>
  );
};

export default SideOption;
