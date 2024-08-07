import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

export const Survey = () => {
  const questions = [
    {
      text: "What is the most popular fitness supplement?",
      options: ["Protein", "Creatine", "BCAA", "Multivitamins"],
    },
    {
      text: "When is the best time to take supplements?",
      options: ["Before workout", "After workout", "During workout", "Anytime"],
    },
    {
      text: "What do you prefer for recovery?",
      options: ["Sleep", "Massage", "Sauna", "Supplements"],
    },
    {
      text: "How often do you take protein supplements?",
      options: ["Daily", "Weekly", "Monthly", "Never"],
    },
    {
      text: "Which type of workout do you prefer?",
      options: ["Strength training", "Cardio", "HIIT", "Yoga"],
    },
    {
      text: "What is your fitness goal?",
      options: ["Muscle gain", "Weight loss", "Endurance", "Flexibility"],
    },
    {
      text: "How long do you usually work out?",
      options: [
        "Less than 30 minutes",
        "30-60 minutes",
        "1-2 hours",
        "More than 2 hours",
      ],
    },
    {
      text: "Do you follow a specific diet?",
      options: [
        "Yes, high protein",
        "Yes, low carb",
        "Yes, balanced diet",
        "No specific diet",
      ],
    },
    {
      text: "How do you track your fitness progress?",
      options: ["Fitness app", "Journal", "Personal trainer", "I don’t track"],
    },
    {
      text: "How often do you exercise per week?",
      options: ["1-2 times", "3-4 times", "5-6 times", "Every day"],
    },
  ];

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
