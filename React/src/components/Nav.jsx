import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    window.sessionStorage.removeItem("Token");
    window.sessionStorage.removeItem("CurrentUser");
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-light bg-light">
        <div id="navbarNav">
          <ul className="navbar-nav">
            {loggedIn && (
              <li className="nav-item active">
                <Link to="/" className="nav-link" href="#">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
            )}
            {!loggedIn && (
              <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">
                  Login
                </Link>
              </li>
            )}
            {!loggedIn && (
              <li className="nav-item">
                <Link to="/registration" className="nav-link" href="#">
                  Register
                </Link>
              </li>
            )}
            {loggedIn && (
              <li className="nav-item">
                <button
                  className="btn btn-link nav-link"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
