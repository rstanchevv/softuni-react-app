import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export const Navigation = ({ location, signOutHandler }) => {
  const { authInfo } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <i className="bi bi-bag">Offer Hub</i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  location == "/catalog"
                    ? "nav-link nav-link-1 active"
                    : "nav-link nav-link-1"
                }
                to="/catalog"
                aria-current="page"
              >
                Offers
              </Link>
            </li>
            <li className="nav-item" hidden={authInfo ? true : ""}>
              <Link
                className={
                  location == "/login"
                    ? "nav-link nav-link-2 active"
                    : "nav-link nav-link-2"
                }
                to="/login"
              >
                Login
              </Link>
            </li>
            <li className="nav-item" hidden={authInfo ? true : ""}>
              <Link
                className={
                  location == "/register"
                    ? "nav-link nav-link-3 active"
                    : "nav-link nav-link-3"
                }
                to="/register"
              >
                Sign up
              </Link>
            </li>
            <li className="nav-item" hidden={!authInfo ? true : ""}>
              <Link
                className={
                  location == "/profile"
                    ? "nav-link nav-link-4 active"
                    : "nav-link nav-link-4"
                }
                to="/profile"
              >
                Profile
              </Link>
            </li>
            <li
              className="nav-item"
              hidden={!authInfo ? true : ""}
              onClick={signOutHandler}
            >
              <Link
                className={
                  location == "/logout"
                    ? "nav-link nav-link-5 active"
                    : "nav-link nav-link-5"
                }
                to="/"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
