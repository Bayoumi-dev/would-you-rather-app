import { useSelector } from "react-redux";
import Container from "../components/layout/Container";
import QuestionsList from "../components/questions/QuestionsList";
import QuestionMenu from "../components/questions/QuestionMenu";

const Home = () => {
  const { questions } = useSelector((state) => state.questions);

  return (
    <section className="questions">
      <Container>
        <QuestionMenu />
        <QuestionsList questions={questions} />
      </Container>
    </section>
  );
};

export default Home;
