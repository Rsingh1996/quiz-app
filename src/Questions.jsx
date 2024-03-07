const questions = [
  {
    question: "What is ReactJS?",
    options: [
      "A server-side framework",
      "A front-end JavaScript library",
      "A back-end JavaScript framework",
      "A database management system",
    ],
    correct: "A front-end JavaScript library",
  },
  {
    question:
      "In React, what is used to pass data to a component from outside?",
    options: ["setState", "props", "state", "getInitialState"],
    correct: "props",
  },
  {
    question: "What is the purpose of the virtual DOM in React?",
    options: [
      "To improve website security",
      "To optimize database queries",
      "To improve performance by minimizing DOM manipulation",
      "To handle server-side rendering",
    ],
    correct: "To improve performance by minimizing DOM manipulation",
  },
  {
    question:
      "Which lifecycle method is called after a component is rendered for the first time?",
    options: [
      "componentDidMount",
      "componentDidUpdate",
      "componentWillMount",
      "componentWillUpdate",
    ],
    correct: "componentDidMount",
  },
];

export default questions;
