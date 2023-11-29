import { Link } from "react-router-dom";


export const Navigation = ({location}) => {
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
                className={location == '/catalog' ? 'nav-link nav-link-1 active' : 'nav-link nav-link-1'} 
                to="/catalog"
                aria-current="page"
                
              >
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className={location == '/login' ? 'nav-link nav-link-2 active' : 'nav-link nav-link-2'}  to="/login">
                  Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className={location == '/register' ? 'nav-link nav-link-3 active' : 'nav-link nav-link-3'}  to="/register">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <a className={location == '/profile' ? 'nav-link nav-link-4 active' : 'nav-link nav-link-4'} href="/profile">
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
