import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Container from "../components/layout/Container";
import Question from "../components/questions/Question";

const SingleQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { questions } = useSelector((state) => state.questions);
  const isQuestionExist = Object.keys(questions).find(q => q===id)

  return (
    <section className="questions">
      <Container>
        <div className="back">
          <button onClick={() => isQuestionExist ? navigate(-1) : navigate('/')}>
            <i className="icon long arrow alternate left"></i>
            {isQuestionExist ? "back" : "back to home"}
          </button>
        </div>
        <Question questionId={id} isPoll />
      </Container>
    </section>
  );
};

export default SingleQuestion;
