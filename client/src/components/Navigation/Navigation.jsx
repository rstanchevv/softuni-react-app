import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="/">
            <i className="bi bi-bag"></i>
            Offer Hub
          </a>
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
              <a
                className="nav-link nav-link-1 active"
                aria-current="page"
                href="index.html"
              >
                Offers
              </a>
            </li>
            <li className="nav-item">
              <Link to="/login">
                <a className="nav-link nav-link-2" href="/login">
                  Login
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register">
                <a className="nav-link nav-link-4" href="/register">
                  Sign up
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-4" href="/profile">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
