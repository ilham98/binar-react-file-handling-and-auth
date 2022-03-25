import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const onLogoutClicked = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink tag={Link} to="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/about">
            About
          </NavLink>
        </NavItem>
        {!isLoggedIn && (
          <NavItem>
            <NavLink tag={Link} to="/login">
              Login
            </NavLink>
          </NavItem>
        )}
        {isLoggedIn && (
          <NavItem>
            <NavLink onClick={onLogoutClicked}>Logout</NavLink>
          </NavItem>
        )}
      </Nav>
    </div>
  );
}

export default Navbar;
