import { useEffect } from "react";
import "./style/App.css";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { showLoading, hideLoading } from "react-redux-loading-bar";

import { fetchUsers } from "./store/reducers/users";
import { fetchQuestions } from "./store/reducers/questions";
import Home from "./pages";
import Login from "./pages/Login";
import NewQusetion from "./pages/NewQuestion";
import Leaderboard from "./pages/Leaderboard";
import SingleQuestion from "./pages/SingleQuestion";
import Layout from "./components/layout";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const status = useSelector((state) => state.questions.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
      dispatch(fetchQuestions());
    }
    if (status === "Loading") {
      dispatch(showLoading());
    } else dispatch(hideLoading());
  }, [dispatch, status]);

  const ProtectedRoute = () =>
    authedUser ? <Outlet /> : <Navigate to="login" />;

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="questions/:id" element={<SingleQuestion />} />
            <Route path="add" element={<NewQusetion />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
