import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { VotedQuestion } from "../../store/reducers/questions";

const VotingBar = ({ option, qid }) => {
  const dispatch = useDispatch();
  const { votesA, votesB } = option;
  let numVotesA = votesA.length;
  let numVotesB = votesB.length;

  const { authedUser, users } = useSelector((state) => state);
  const [{ Voted, isVoted }, setVote] = useState({
    Voted: "",
    isVoted: false,
  });

  const [{ optionA, optionB }, setOption] = useState({
    optionA: "",
    optionB: "",
  });

  // Check if the user chose option A or B
  useEffect(() => {
    if (votesA.includes(authedUser)) {
      setVote({
        Voted: "a",
        isVoted: true,
      });
    } else if (votesB.includes(authedUser)) {
      setVote({
        Voted: "b",
        isVoted: true,
      });
    }
  }, [authedUser, votesA, votesB]);

  // Returns the number of votes to the percentage
  useEffect(() => {
    const toPercentage = (votes) => {
      return Math.round((votes / (numVotesA + numVotesB)) * 100);
    };
    return () => {
      setOption({
        optionA: toPercentage(numVotesA),
        optionB: toPercentage(numVotesB),
      });
    };
  }, [isVoted, numVotesA, numVotesB, users]);

  //
  const handleVote = ({ target }) => {
    const { name } = target;
    name === "a" ? (numVotesA += 1) : (numVotesB += 1);
    setVote({
      Voted: target.name,
      isVoted: true,
    });
    dispatch(
      VotedQuestion({
        authedUser,
        qid,
        answer: name === "a" ? "optionOne" : "optionTwo",
      })
    );
  };

  return (
    <div className="voting">
      {!isVoted ? (
        <div className="poll">
          <button className="btn left" name="a" onClick={handleVote}>
            (A)
          </button>
          <button className="btn right" name="b" onClick={handleVote}>
            (B)
          </button>
        </div>
      ) : (
        <>
          <div className="num-votes">
            <span className="option_a">
              {`${numVotesA} out of ${numVotesA + numVotesB} ${
                Voted === "a" ? "(you)" : ""
              }`}
            </span>
            <span className="option_b">
              {`${numVotesB} out of ${numVotesA + numVotesB} ${
                Voted === "b" ? "(you)" : ""
              }`}
            </span>
          </div>
          <div className="voting_bar">
            <div
              className={`left ${Voted === "a" ? "voted" : ""}`}
              style={{ width: `${isVoted ? optionA : 50}%` }}
            >
              {optionA}%
            </div>
            <div
              className={`right ${Voted === "b" ? "voted" : ""}`}
              style={{
                width: `${isVoted ? optionB : 50}%`,
                zIndex: `${optionB ? 1 : 0}`,
              }}
            >
              {optionB}%
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VotingBar;
