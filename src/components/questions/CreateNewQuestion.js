import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Form, Button, Divider } from "semantic-ui-react";
import Container from "../layout/Container";
import { addNewQuestion } from "../../store/reducers/questionsSlice";
import { updateUserQuestions } from "../../store/reducers/usersSlice";

const CreateNewQuestion = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { authedUser } = useSelector((state) => state);
  const initOption = {
    optionA: "",
    optionB: "",
  };
  const [{ optionA, optionB }, setOption] = useState(initOption);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    e.target.name === "optionA"
      ? setOption((currOption) => ({ ...currOption, optionA: e.target.value }))
      : setOption((currOption) => ({ ...currOption, optionB: e.target.value }));
  };

  const handleNewQuestion = () => {
    if (optionA && optionB) {
      const question = {
        optionOneText: optionA,
        optionTwoText: optionB,
        author: authedUser,
      };
      dispatch(addNewQuestion(question)).then((res) =>
        dispatch(updateUserQuestions(res.payload))
      );
      setOption(initOption);
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <section className="new_question">
      <Container>
        <Card>
          <Card.Content>
            <h1>Create New Question</h1>
          </Card.Content>
          <Card.Content>
            <Form onSubmit={handleNewQuestion}>
              <Form.Field>
                <label>Would you rather</label>
                <input
                  className={error ? "error" : null}
                  name="optionA"
                  placeholder="Option (A)"
                  value={optionA}
                  onChange={handleChange}
                />
              </Form.Field>
              <Divider horizontal>Or</Divider>
              <Form.Field>
                <input
                  className={error ? "error" : null}
                  name="optionB"
                  placeholder="Option (B)"
                  value={optionB}
                  onChange={handleChange}
                />
              </Form.Field>
              <Button type="submit" color="blue">
                Submit
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Container>
    </section>
  );
};

export default CreateNewQuestion;
