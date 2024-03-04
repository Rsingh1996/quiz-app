import React from "react";
import { useState } from "react";
import questions from "./Questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleQuizSubmission = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
      setFeedback("Correct!");
      setScore(score + 1); // varOcg
    } else {
      setFeedback(
        "Incorrect. The correct answer is " + currentQuestion.correct
      );
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setFeedback("");
    } else {
      setFeedback(
        `Quiz Complete! You scored ${score} out of ${questions.length}`
      );
    }
  };

  return (
    <div className="container">
      <div id="question">
        <h1>{questions[currentQuestionIndex].question}</h1>
      </div>
      <div className="sub-container">
        {questions[currentQuestionIndex].options.map((option, index) => (
          <p key={index}>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label>{option}</label>
          </p>
        ))}
      </div>
      <button onClick={handleQuizSubmission}>Submit</button>
      <div>{feedback}</div>
      {currentQuestionIndex < questions.length && (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
