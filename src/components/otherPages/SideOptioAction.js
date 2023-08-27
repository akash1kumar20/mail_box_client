import SideOption from "./SideOption";
import SideOptionClickable from "./SideOptionClickable";
import { canvasAction } from "../../redux_store/canvasSlice";
import { useSelector, useDispatch } from "react-redux";
const SideOptioAction = () => {
  const canvasState = useSelector((state) => state.canvas.canvasVisibility);
  const active = useSelector((state) => state.canvas.active);
  const dispatch = useDispatch();
  const closeCanvas = () => {
    if (active === true) {
      return;
    } else {
      dispatch(canvasAction.setCanvasVisibility(false));
    }
  };

  return (
    <>
      {!canvasState && (
        <div
          className="col-1 ms-4 me-sm-5"
          onMouseOver={() => dispatch(canvasAction.showCanvas())}
        >
          <SideOption />
        </div>
      )}
      {canvasState && (
        <div className="col-2 ms-md-4" onMouseOut={closeCanvas}>
          <SideOptionClickable />
        </div>
      )}
    </>
  );
};

export default SideOptioAction;
