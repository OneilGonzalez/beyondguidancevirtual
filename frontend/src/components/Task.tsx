// src/components/Task.tsx

import React, { useState } from 'react';
import './Task.css'; // Import your CSS file

interface TaskProps {
  title: string;
  image: string; // Image URL
  content: React.ReactNode;
  question: string;
  correctAnswer: string;
  /*
  onAddTask: (task: string) => void;
  onDeleteTask: () => void;
  onUpdateTask: (task: string) => void;
  */
}

const Task: React.FC<TaskProps> = ({ title, image, question, content, correctAnswer }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [incorrectInput, setIncorrectInput] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIncorrectInput(false); // Reset incorrect input message when user starts typing
  };

  const checkAnswer = () => {
    if (!isAnswerSubmitted) {
      if (correctAnswer && inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        setIsAnswerCorrect(true);
        setIsAnswerSubmitted(true);
      } else {
        setIncorrectInput(true); // Set incorrect input message
      }
    }
  };

  return (
    <div className={`task-item ${isActive ? 'active' : ''}`}>
      <div className="task-header" onClick={() => setIsActive(!isActive)}>
        <div className="task-title">{title}</div>
        <div className="task-icon">{isActive ? '▲' : '▼'}</div>
      </div>
      <div className="task-content">
        <img src={image} alt="Task" className="task-image" />
        {content}
        <div className="task-question">{question}</div>
        <input type="text" value={inputValue} onChange={handleInputChange} disabled={isAnswerCorrect} />
        <button style={{ backgroundColor: isAnswerCorrect ? 'green' : 'initial' }} onClick={checkAnswer} disabled={isAnswerCorrect}>
          Check Answer
        </button>
        {incorrectInput && !isAnswerCorrect && <div className="incorrect-message">Incorrect input. Try again.</div>}
        {isAnswerCorrect && (
          <div className="correct-answer">
            Correct answer: {correctAnswer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
