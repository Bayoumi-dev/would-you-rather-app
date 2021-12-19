import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" activeclassname="active">
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to="/leaderboard" activeclassname="active">
            Leaderboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
