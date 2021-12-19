import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";
import { format } from "date-fns";
import VotingBar from "./VotingBar";

const Question = ({ questionId, isPoll }) => {
  const { users } = useSelector((state) => state);

  const { questions } = useSelector((state) => state.questions);
  const question = Object.values(questions).find(
    (question) => question.id === questionId
  );

  if (!question) {
    return <p>This question doesn't existd!</p>
  }

  const { id, author, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = Object.values(users).find(
    (user) => user.id === author
  );
  const handleTime = (timestamp) => format(timestamp, "p | M/dd/yyyy");

  return (
    <Card>
      <Card.Content>
          <div className="author">
            <div className="avatar-container">
              <Image src={avatarURL} />
            </div>
            <div>
              <Card.Header>
                {name} <small>asks:</small>
              </Card.Header>
              <div className="date">{handleTime(timestamp)}</div>
            </div>
        </div>

        <Card.Description>
          <strong>Would you rather</strong>
          <span className={isPoll && "option_a"}> {optionOne.text}</span>
          <strong> or</strong>
          <span className={isPoll && "option_b"}> {optionTwo.text}</span>
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
        {isPoll ? (
          <VotingBar
            qid={id}
            option={{ votesA: optionOne.votes, votesB: optionTwo.votes }}
          />
        ) : (
          <Link to={`/questions/${id}`} className="view_poll">
            View Poll
          </Link>
        )}
      </Card.Content>
    </Card>
  );
};

export default Question;
