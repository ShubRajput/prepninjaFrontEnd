import React from "react";
import {
  Link,
  // Route,
  // BrowserRouter as Router,
  // RoutesuseLocation,
  useNavigate,
  useLocation
} from "react-router-dom";

// import NewAboutUs from "./NewAboutUs";

function NewNavBar() {
  let location = useLocation();
  let history = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <a className="navbar-brand" href="#"> */}
        <Link to="/">
          <img
            src="prep_ninja_logo.jpg"
            width="100"
            height="75"
            className="d-inline-block align-top mx-2"
            alt=""
          />
        </Link>
        {/* </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/InterviewQForm'? "active":""}`} to="/InterviewQForm">
                Add Interview Experience
              </Link>
            </li> */}
            {/* <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/ShowMyQuestion'? "active":""}`} to="/ShowMyQuestion">
                My Questions
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/ShowAllQuestion'? "active":""}`} to="/ShowAllQuestion">
                All Interview Experience
              </Link>
            </li> */}
            <li className="nav-item active">
              <Link className={`nav-link ${location.pathname==='/NewAboutUs'? "active":""}`} to="/NewAboutUs" >
                Meet To Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/ContactUs'? "active":""}`} to="/ContactUs">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>
        {/* {!localStorage.getItem("token") ? (
          <form className="d-flex">
            <Link type="button" className="btn btn-primary mx-2" to="/login">
              Login
            </Link>
            <Link type="button" className="btn btn-primary" to="/signup">
              Sign Up
            </Link>
          </form>
        ) : (
          <button
            type="button"
            className="btn btn-primary mx-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        )} */}
      </nav>
    </div>
  );
}

export default NewNavBar;
