import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import { questions } from "../utils/helpers";

export const Survey = () => {
  const [votes, setVotes] = useState(questions.map(() => new Array(4).fill(0)));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleVote = (questionIndex, optionIndex) => {
    const newVotes = votes.map((vote, index) =>
      index === questionIndex
        ? vote.map((v, i) => (i === optionIndex ? v + 1 : v))
        : vote
    );
    setVotes(newVotes);

    const nextQuestion = (currentQuestion + 1) % questions.length;
    setCurrentQuestion(nextQuestion);
  };

  const getTotalVotes = (questionIndex) => {
    return votes[questionIndex].reduce((a, b) => a + b, 0);
  };

  const getPercentage = (questionIndex, optionIndex) => {
    const totalVotes = getTotalVotes(questionIndex);
    return totalVotes === 0
      ? 0
      : (votes[questionIndex][optionIndex] / totalVotes) * 100;
  };

  return (
    <SurveyContainer>
      <Carousel
        activeIndex={currentQuestion}
        controls={false}
        indicators={false}
        interval={null}
      >
        {questions.map((question, qIndex) => (
          <Carousel.Item key={qIndex}>
            <QuestionContainer>
              <h4>{question.text}</h4>
              {question.options.map((option, oIndex) => (
                <OptionButton
                  key={oIndex}
                  className="btn btn-outline-danger"
                  onClick={() => handleVote(qIndex, oIndex)}
                >
                  {option}
                </OptionButton>
              ))}
              {question.options.map((option, oIndex) => (
                <div key={oIndex}>
                  <ProgressBar width={getPercentage(qIndex, oIndex)}>
                    {votes[qIndex][oIndex]} (
                    {getPercentage(qIndex, oIndex).toFixed(1)}%)
                  </ProgressBar>
                </div>
              ))}
              <p>Total votes: {getTotalVotes(qIndex)}</p>
            </QuestionContainer>
          </Carousel.Item>
        ))}
      </Carousel>
    </SurveyContainer>
  );
};

const SurveyContainer = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`;

const OptionButton = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width || 0}%;
  background-color: red;
  height: 20px;
  border-radius: 4px;
  text-align: center;
  color: white;
`;
