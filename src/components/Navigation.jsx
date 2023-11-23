export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <i className="bi bi-bag"></i>
                Offer Hub
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link nav-link-1 active" aria-current="page" href="index.html">Offers</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-2" href="login.html">Login</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-4" href="register.html">Sign up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link nav-link-4" href="register.html">Profile</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}