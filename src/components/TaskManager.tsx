// src/components/TaskManager.tsx
/*
import React, { useState } from 'react';
import Task from './Task';

interface TaskItem {
  title: string;
  content: React.ReactNode;
}

const TaskManager: React.FC<{ tasks: TaskItem[] }> = ({ tasks }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleTaskClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          title={task.title}
          content={task.content}
          isActive={activeIndex === index}
          onClick={() => handleTaskClick(index)}
        />
      ))}
    </div>
  );
};

export default TaskManager;
*/