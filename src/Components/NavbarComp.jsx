import merchIcon from '../Assets/Images/Frame.png';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Login from "./Login";
// import Register from "./Register";

export default function NavbarComp() {
  return (
    // <Router>
      <div>
        <nav>
          <div className="navbarComp">
            <div className="nav-left">
              <img src={merchIcon} alt="" />
            </div>
            <ul className="nav-right">
              <li>Complain</li>
              <li>Profil</li>
              <li>
                <Link className="right-login" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="right-login" to="/register">
                  Register
                </Link>
              </li>
              <li>Logout</li>
            </ul>
          </div>
        </nav>
      </div>
    //   {/* <Routes>
    //     <Route exact path="/login" element={<Login />} />
    //     <Route exact path="/register" element={<Register />} /> */}
        // {/* <Route element={<PrivateRoute />}>
        //   <Route exact path="/about" element={<About />} />
        //   <Route exact path="/profile" element={<Profile />} />
        //   <Route exact path="/user/:id" element={<DetailUser />} />
        // </Route> */}
    //   {/* </Routes>
    // </Router> */}
  );
}