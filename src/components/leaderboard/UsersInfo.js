import User from "./User";
import { Table } from "semantic-ui-react";

const UsersInfo = ({ users, isProfile }) => {
  
  // if the profile page is calling this component return just the user sent from it
  // Is the leaderboard page ---> Returns all users in descending order
  users = (isProfile ? [users] : Object.values(users))
    .map((user) => ({
      name: user.name,
      avatarURL: user.avatarURL,
      answers: Object.keys(user.answers).length,
      questions: user.questions.length,
      score: function () {
        return this.answers + this.questions;
      },
    }))
    .sort((a, b) => {
      return b.score() - a.score();
    });

  return (
    <Table basic="very" celled collapsing>
      <Table.Body>
        {users.map((user, index) => (
          <User key={index} rank={index + 1} user={user} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersInfo;
