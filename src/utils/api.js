import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from "./_DATA";

export const getUsers = () => _getUsers();
export const getQuestions = () => _getQuestions();
export const saveQuestion = (question) => _saveQuestion(question);
export const saveQuestionAnswer = (votedInfo) => _saveQuestionAnswer(votedInfo);
