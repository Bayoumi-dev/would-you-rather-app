import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from '../logo.svg'
import { Dropdown } from "semantic-ui-react";
import { setAuthedUser } from "../store/reducers/authedUserSlice";
import { Card } from "semantic-ui-react";

const Login = () => {
  const navigate = useNavigate();
  const userSelected = useRef();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const [userOptions, setUserOptions] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    users &&
      Object.values(users).map((user) => {
        return setUserOptions((currState) => [
          ...currState,
          {
            key: user.id,
            text: user.name,
            value: user.id,
            image: { avatar: true, src: user.avatarURL },
          },
        ]);
      });
  }, [users]);

  const handleSelected = (e) => {
    e.preventDefault();
    if (userSelected.current.hasValue()) {
      dispatch(setAuthedUser(userSelected.current.state.value));
      navigate(-1);
    } else setError(true);
  };

  return (
    <>
      <section className="login">
        <Card>
          <Card.Content>
            <div className="top">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <div className="txt">
                <h1>Welcome to would you rather app!</h1>
                <p>Please Sign in to continue</p>
              </div>
            </div>

            <form onSubmit={handleSelected}>
              <Dropdown
                className={error ? "error" : null}
                ref={userSelected}
                placeholder="Select User"
                fluid
                selection
                options={userOptions}
                onClick={() => setError(false)}
              />
              <input type="submit" value="Sign in" />
            </form>
          </Card.Content>
        </Card>
      </section>
    </>
  );
};

export default Login;
