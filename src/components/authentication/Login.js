import Card from "../UI/Card";
import "./Login.css";
const Login = () => {
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
            <p className="mt-3 fs-4">Sign in</p>
            <p className="fs-5">to continue to Gmail</p>
          </div>
        </div>
        <div className="row mb-2">
          <form>
            <input
              type="text"
              id="mail"
              required
              placeholder="Email or Phone"
            />
          </form>
          <p className="forgot">Forgot email?</p>
        </div>
        <div className="row mb-5 mt-3 justify-content-between">
          <div className="col-sm-6 create">
            <p className="text-primary fs-5">Create account</p>
          </div>
          <div className="col-sm-4 next">
            <button className="ps-3 pe-3 btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Login;
