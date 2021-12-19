import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthedUser } from "../../store/reducers/authedUserSlice";
import { activeQuestionssSelected } from "../../store/reducers/questionsSlice";

const UserOptions = ({ name }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setAuthedUser(null));
    dispatch(activeQuestionssSelected("Unanswered Questions"));
    navigate("/");
  };

  const [isListOpen, setIsListOpen] = useState(false);
  // Handling outside clicks
  useEffect(() => {
    isListOpen && window.addEventListener("click", closeNav);
    // Cleanup function to clean event listener from window
    return () => window.removeEventListener("click", closeNav);
  }, [isListOpen]);

  // Open Nav
  const openNav = () => setIsListOpen(true),
    // close Nav
    closeNav = () => setIsListOpen(false);
  return (
    <div className="user_options ">
      <button onClick={openNav}>
        <i className="caret down icon"></i>
      </button>
      {isListOpen && (
        <div className="move-to">
          <span>Sign in as {name}</span>
          <ul>
            <li>
              <Link to="profile">My Profile</Link>
            </li>
            <li onClick={handleSignOut}>
              <i className="sign-out icon"></i>Sign out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserOptions;
