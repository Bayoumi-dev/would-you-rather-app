import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import Question from "./Question";

const QuestionsList = (props) => {
  const { authedUser } = useSelector((state) => state);

  const { activeQuestions } = useSelector((state) => state.questions);

  let questions = props.questions;
  questions = Object.values(questions).sort((a, b) =>
    b.timestamp.toString().localeCompare(a.timestamp.toString())
  );

  // Filter questions to Unanswered Questions and Answered Questions
  const filterQuestions = () => {
    if (props.isProfile) {
      return questions
    } else {
      if (activeQuestions === "Unanswered Questions")
        return questions.filter(
          (q) =>
            ![...q.optionOne.votes, ...q.optionTwo.votes].includes(authedUser)
        );
      if (activeQuestions === "Answered Questions")
        return questions.filter((q) =>
          [...q.optionOne.votes, ...q.optionTwo.votes].includes(authedUser)
        );
    }
  };

  const Questions = () =>
    authedUser &&
    filterQuestions().map((question) => (
      <Question key={question.id} questionId={question.id} />
    ));

  return (
    <Card.Group>
      {Questions().length ? (
        <Questions />
      ) : (
        <div className="no_questions">
          {/* <p>No Questions.</p> */}
          <Link to="/add">
            <i className="add icon"></i> Create New Question
          </Link>
        </div>
      )}
    </Card.Group>
  );
};

export default QuestionsList;
