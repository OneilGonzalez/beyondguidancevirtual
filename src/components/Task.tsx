// src/components/Task.tsx

import React, { useState } from 'react';
import './Task.css'; // Import your CSS file

interface TaskProps {
  title: string;
  content: React.ReactNode;
}

const Task: React.FC<TaskProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`task-item ${isActive ? 'active' : ''}`}>
      <div className="task-header" onClick={() => setIsActive(!isActive)}>
        <div className="task-title">{title}</div>
        <div className="task-icon">{isActive ? '▲' : '▼'}</div>
      </div>
      <div className="task-content">
        {content}
      </div>
    </div>
  );
};

export default Task;
