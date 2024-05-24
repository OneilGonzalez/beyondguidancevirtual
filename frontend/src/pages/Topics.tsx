// Topics.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const initialTopics = [
  { id: 1, name: 'Week 1', path: 'week1' },
  { id: 2, name: 'Week 2', path: 'week2' },
  { id: 3, name: 'Week 3', path: 'week3' },
  { id: 4, name: 'Week 4', path: 'week4' },
  { id: 5, name: 'Week 5', path: 'week5' },
  { id: 6, name: 'Week 6', path: 'week6' },
  {id:7, name: 'Lab 1', path: 'lab1'}
];

const Topics: React.FC = () => {
  return (
    <div className="container">
      <h2>Topics</h2>
      <ul>
        {initialTopics.map(topic => (
          <li key={topic.id}>
            
            <Link to={`/topics/${topic.path}`}>{topic.name}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;



/*
// pages/Topics.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const initialTopics = [
  { id: 1, name: 'Topic 1', week: 'Week 1' },
  { id: 2, name: 'Topic 2', week: 'Week 1' },
  { id: 3, name: 'Topic 3', week: 'Week 2' },
  { id: 4, name: 'Topic 4', week: 'Week 2' },
  { id: 5, name: 'Topic 5', week: 'Week 3' },
  { id: 6, name: 'Topic 6', week: 'Week 3' }
];

const Topics: React.FC = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {initialTopics.map(topic => (
          <li key={topic.id}>
            <Link to={`/week/${topic.week}`}>{topic.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;

*/