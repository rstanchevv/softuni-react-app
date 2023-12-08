import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export const Navigation = ({ signOutHandler }) => {
  const location = useLocation();
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
            {" "}
            <li className="nav-item">
              <Link
                className={
                  location.pathname == "/catalog"
                    ? "nav-link nav-link-1 active"
                    : "nav-link nav-link-1"
                }
                to="/catalog"
                aria-current="page"
              >
                Offers
              </Link>
            </li>
            {authInfo ? (
              <>
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname == "/add-offer"
                        ? "nav-link nav-link-6 active"
                        : "nav-link nav-link-6"
                    }
                    to="/add-offer"
                  >
                    Add offer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname == "/profile"
                        ? "nav-link nav-link-4 active"
                        : "nav-link nav-link-4"
                    }
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item" onClick={signOutHandler}>
                  <Link
                    className={
                      location.pathname == "/logout"
                        ? "nav-link nav-link-5 active"
                        : "nav-link nav-link-5"
                    }
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname == "/login"
                        ? "nav-link nav-link-2 active"
                        : "nav-link nav-link-2"
                    }
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={
                      location.pathname == "/register"
                        ? "nav-link nav-link-3 active"
                        : "nav-link nav-link-3"
                    }
                    to="/register"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
