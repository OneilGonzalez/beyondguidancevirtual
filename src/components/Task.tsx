// src/components/Task.tsx
import React, { useState } from 'react';
import './Task.css'; // Import your CSS file

interface TaskProps {
  title: string;
  image: string; // Image URL
  content: React.ReactNode;
  question: string;
  correctAnswer: string;
}

const Task: React.FC<TaskProps> = ({ title, image, question, content, correctAnswer }) => {
  const [isActive, setIsActive] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const checkAnswer = () => {
    if (correctAnswer && inputValue.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
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
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button style={{ backgroundColor: isAnswerCorrect ? 'green' : 'initial' }} onClick={checkAnswer}>
          Check Answer
        </button>
        {/*
        <button 
          className={isAnswerCorrect ? 'correct' : ''} 
          onClick={checkAnswer}
          disabled={isAnswerCorrect} // Disable button after correct answer
        >
          {isAnswerCorrect ? 'Correct!' : 'Check Answer'}
        </button>
        {isAnswerCorrect && (
          <div className="correct-answer">
            Correct answer: {correctAnswer}
          </div>
        )}*/}
      </div>
    </div>
  );
};

export default Task;

