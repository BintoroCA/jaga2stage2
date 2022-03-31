import merchIcon from '../Assets/Images/Frame.png';
import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
      <div>
        <nav>
          <div className="navbarComp">
            <div className="nav-left">
              <img src={merchIcon} alt="" />
            </div>
            <ul className="nav-right">
              <li>
              <Link className="right-nav-item" to="/admin-complain">
                  Complain
              </Link>
              </li>
              <li>
              <Link className="right-nav-item" to="/profile">
                Profil
              </Link>
              </li>
              <li>
                <Link className="right-nav-item" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="right-nav-item" to="/register">
                  Register
                </Link>
              </li>
              <li>Logout</li>
            </ul>
          </div>
        </nav>
      </div>
  );
}