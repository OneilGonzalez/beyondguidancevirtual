// TypingText.tsx

import React, { useState, useEffect } from 'react';
import './TypingText.css';

const TypingText: React.FC = () => {
  const [text, setText] = useState('');
  const phrases = ['Building Good Virtual Labs', 'Basic Gears Virtual'];
  const typingSpeed = 100; // Adjust typing speed in milliseconds
  const deleteSpeed = 50; // Adjust deletion speed in milliseconds
  const pauseSpeed = 1000; // Adjust pause between phrases in milliseconds

  useEffect(() => {
    let currentPhraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: number;

    const type = () => {
      const currentText = phrases[currentPhraseIndex];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setText(currentText.substring(0, charIndex + 1));
        charIndex++;
      }

      if (isDeleting) {
        if (charIndex === 0) {
          isDeleting = false;
          currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
          timeoutId = window.setTimeout(type, pauseSpeed);
        } else {
          timeoutId = window.setTimeout(type, deleteSpeed);
        }
      } else {
        if (charIndex === currentText.length) {
          isDeleting = true;
          timeoutId = window.setTimeout(type, pauseSpeed);
        } else {
          timeoutId = window.setTimeout(type, typingSpeed);
        }
      }
    };

    type();

    // Cleanup function to clear the timeout when the component unmounts
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="typing-text">
      <span>{text}</span>
    </div>
  );
};

export default TypingText;
