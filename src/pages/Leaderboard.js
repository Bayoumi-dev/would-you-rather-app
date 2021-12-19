import { useSelector } from "react-redux";
import UsersInfo from "../components/leaderboard/UsersInfo";
import Container from "../components/layout/Container";

const Leaderboard = () => {
  const { users } = useSelector((state) => state);
  return (
    <section className="leaderboard users_info">
      <Container>
        <UsersInfo users={users} />
      </Container>
    </section>
  );
};

export default Leaderboard;
