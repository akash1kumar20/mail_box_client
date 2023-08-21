import Card from "../UI/Card";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <Card>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>
              <span className="text-primary">G</span>
              <span className="text-danger">o</span>
              <span className="text-warning">o</span>
              <span className="text-primary">g</span>
              <span className="text-primary">l</span>
              <span className="text-danger">e</span>
            </h3>
            <p className="mt-3 fs-4">Enter your email</p>
            <p className="mt-3 fs-5">To recover password for your email</p>
          </div>
          <div className="row">
            <form>
              <input type="email" required placeholder="Enter Your Email" />
              <div className="row mb-5 justify-content-between">
                <div className="col-3 mb-3">
                  <button
                    className="ps-3 pe-3 mt-3 btn btn-primary"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-3 mb-3">
                  <button
                    className="ps-3 pe-3 mt-3 btn btn-primary"
                    type="submit"
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ForgotPassword;
