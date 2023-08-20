import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPencil,
  faInbox,
  faStar,
  faPaperPlane,
  faBookmark,
  faTrashCan,
  faUser,
  faRefresh,
  faSquare,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import "./Mail.css";
import mHeading from "./../../../src/images/logo_gmail_lockup_dark_1x_r5.png";
import { useSelector, useDispatch } from "react-redux";
import { canvasAction } from "../../redux_store/canvasSlice";
const Mail = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const canvasState = useSelector((state) => state.canvas.canvasVisibility);
  const activeCanvas = () => {
    dispatch(canvasAction.showCanvas());
    setActive((prevState) => !prevState);
  };
  const closeCanvas = () => {
    if (active === true) {
      return;
    } else {
      dispatch(canvasAction.showCanvas());
    }
  };
  return (
    <div className="mailBackground ">
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
          <FontAwesomeIcon icon={faUser} className="user" />
        </h3>
      </div>
      <div className="row">
        {!canvasState && (
          <div
            className="col-1 ms-4 me-sm-5"
            onMouseOver={() => dispatch(canvasAction.showCanvas())}
          >
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
          </div>
        )}
        {canvasState && (
          <div className="col-2 ms-md-4" onMouseOut={closeCanvas}>
            <div className="icons mt-4">
              <h3 className="compose">
                <FontAwesomeIcon icon={faPencil} className="mb-1 me-1" />
                <span> Compose</span>
              </h3>
              <h5>
                <FontAwesomeIcon icon={faInbox} className="mb-1 me-3" />
                <span> Inbox</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faStar} className="mb-1 me-3" />
                <span> Star</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faPaperPlane} className="mb-1 me-3" />
                <span> Sent</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faBookmark} className="mb-1 me-3" />
                <span> Draft</span>
              </h5>
              <h5>
                <FontAwesomeIcon icon={faTrashCan} className=" me-3" />
                <span>Trash</span>
              </h5>
            </div>
          </div>
        )}
        <div className="col-9 inboxBox ms-md-5 ms-sm-2">
          <div className="mb-4 mt-2 icons">
            <FontAwesomeIcon icon={faSquare} className="me-4 ms-1" />
            <FontAwesomeIcon
              icon={faRefresh}
              onClick={() => window.location.reload(true)}
            />
            <FontAwesomeIcon icon={faSliders} className="ms-4" />
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, ullam
          quam officia dolorum obcaecati porro, labore possimus vero consequatur
          eius voluptatem unde sunt deserunt cumque voluptas, quasi modi quis
          nobis! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Debitis, velit aspernatur? Cupiditate explicabo ipsa, reprehenderit
          perspiciatis quis odio? Reiciendis neque dolore, numquam molestias
          ipsa, necessitatibus harum dolor incidunt ipsam quibusdam provident
          asperiores velit alias nihil eius fugit nam tenetur recusandae
          exercitationem ab assumenda et illo. Quam enim sapiente nihil id sed,
          in velit cumque consequatur quis officia iure nisi iusto veniam omnis
          dicta, unde placeat tempore. Totam voluptate temporibus sint suscipit
          quis quas sed quae eius sequi cumque modi nam laboriosam assumenda
          aperiam error libero, unde ab, deserunt atque? Ipsum illo, eum
          laudantium animi sequi in, iusto eaque debitis corporis culpa quod est
          soluta, deleniti explicabo fugiat veniam eligendi excepturi dolorem
          molestiae doloribus pariatur? Deleniti modi alias ipsum obcaecati iure
          commodi qui, laudantium quibusdam nesciunt dignissimos totam facere
          corrupti voluptatum iste vel cumque, corporis harum dolorum eveniet ad
          doloremque officiis odio assumenda. Placeat magnam nobis error
          architecto? Facere corrupti placeat ullam distinctio, quia maiores
          maxime nisi animi repellendus, ea delectus reprehenderit? Nobis ipsam,
          expedita sit quo beatae ex enim saepe ad, dicta aliquid vitae
          recusandae explicabo minus iste ipsum libero ullam voluptatibus
          accusamus numquam qui, a voluptatum? Harum dolorum fuga totam
          possimus, exercitationem minima? Illum sapiente eaque veritatis nobis,
          nulla quae impedit. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Minus doloremque possimus aliquid sed non cum quis
          porro, provident fuga eius blanditiis aspernatur cumque dolorem unde
          sunt? Dolor, illo molestias. Eaque rerum laudantium voluptatibus fugit
          tempore sequi ea officia molestias! Optio culpa dignissimos labore
          minus accusantium nulla quae, quia quas totam error vitae unde facere
          quaerat delectus expedita facilis hic commodi id eum, alias deleniti,
          inventore magni ex recusandae? Quod explicabo, eaque, assumenda
          numquam provident debitis officiis ab, in suscipit sed exercitationem
          aspernatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Vero nostrum incidunt non, atque error iure doloribus ratione rerum
          tempore at dolores sint provident culpa corrupti delectus amet. Vero
          voluptas aperiam, assumenda facilis suscipit autem quas enim tempore
          adipisci eveniet, exercitationem sunt corrupti quae? Inventore quasi
          vero dicta nobis explicabo nemo? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Architecto, ullam. Atque odit
          reprehenderit accusamus assumenda voluptates nihil architecto nesciunt
          laudantium?
        </div>
      </div>
    </div>
  );
};

export default Mail;
