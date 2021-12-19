import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import UserOptions from "../users/UserOptions";
import NavBar from "./NavBar";

const Header = () => {
  const { authedUser, users } = useSelector((state) => state);

  const { name, avatarURL } = Object.values(users).find(
    (user) => user.id === authedUser
  );

  // Open and close Navbar
  // This feature appears on the screen has a width of less than 768px
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Handling outside clicks
  useEffect(() => {
    isNavOpen && window.addEventListener("click", closeNav);
    // Cleanup function to clean event listener from window
    return () => window.removeEventListener("click", closeNav);
  }, [isNavOpen]);

  // Open Nav
  const openNav = () => setIsNavOpen(true),
    // close Nav
    closeNav = () => setIsNavOpen(false);

  return (
    <header className={isNavOpen ? "open_nav" : null}>
      <div className="container ">
        <div style={{ display: "flex", alignItems: "center" }}>
          <i className="list icon" onClick={openNav}></i>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" width="45" />
          </Link>
        </div>
        <NavBar />
        <div className="user">
          <div className="name" title={name}>{`Hello, ${name}`}</div>
          <div className="avatar-container">
            <img src={avatarURL} alt="user" />
          </div>
          <UserOptions name={name} />
        </div>
      </div>
    </header>
  );
};

export default Header;
