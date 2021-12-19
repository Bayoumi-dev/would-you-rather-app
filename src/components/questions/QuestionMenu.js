import { Menu } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { activeQuestionssSelected } from "../../store/actoins/questions";

const QuestionMenu = () => {
  const { activeQuestions } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const handleMenuClick = (_, { name }) =>
    dispatch(activeQuestionssSelected(name));
  return (
    <Menu tabular>
      <Menu.Item
        name="Unanswered Questions"
        active={activeQuestions === "Unanswered Questions"}
        onClick={handleMenuClick}
      />
      <Menu.Item
        name="Answered Questions"
        active={activeQuestions === "Answered Questions"}
        onClick={handleMenuClick}
      />
    </Menu>
  );
};

export default QuestionMenu;
