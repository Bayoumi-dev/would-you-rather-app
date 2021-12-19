import { useSelector } from "react-redux";
import Container from "../components/layout/Container";
import UsersInfo from "../components/leaderboard/UsersInfo";
import QuestionsList from "../components/questions/QuestionsList";

const Profile = () => {
  const { authedUser, users } = useSelector((state) => state);
  let { questions } = useSelector((state) => state.questions);

  const user = Object.values(users).find((user) => user.id === authedUser);
  questions = Object.values(questions).filter((q) =>
    user.questions.includes(q.id)
  );

  return (
    <section className="questions">
      <Container>
        <div className="users_info">
          <UsersInfo users={user} isProfile />
        </div>
        <QuestionsList questions={questions} isProfile />
      </Container>
    </section>
  );
};

export default Profile;
