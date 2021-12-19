import { Header, Image, Table } from "semantic-ui-react";

const User = ({ rank, user }) => {
  const { name, avatarURL, answers, questions } = user;
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4" image className="user">
          <i
            className={`trophy icon ${
              rank === 1
                ? "yellow"
                : rank === 2
                ? "pink"
                : rank === 3
                ? "blue"
                : ""
            }`}
          ></i>
          <div className="avatar-container">
            <Image src={avatarURL} />
          </div>
          <Header.Content>
            {name}
            <Header.Subheader>Answered Questions: {answers}</Header.Subheader>
            <Header.Subheader>Create Questions: {questions}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>
        <span style={{ fontSize: "1rem" }}>Score</span> <br />
        {user.score()}
      </Table.Cell>
    </Table.Row>
  );
};

export default User;
