import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
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
      </Nav>
    </div>
  );
}

export default Navbar;
