import {NavLink} from "react-router-dom";
import "./Nav.css";

/** Nav component to show different dog names
 * 
 * Props:
 * - dogNames: Array of dog names to display
 * 
 * App -> Nav
 */

function Nav({dogNames}) {

  let navLinks = dogNames.map(n => (
    <NavLink key={n} exact to={`/dogs/${n}`}>{n}</NavLink>
  ));
  return (
    <nav className="Nav">
      <NavLink key="all" exact to="/dogs">All the dogs</NavLink>
      {navLinks}
    </nav>
  );
}

export default Nav;