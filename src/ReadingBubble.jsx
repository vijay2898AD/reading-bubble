// src/ReadingBubble.jsx
import React, { useState, useEffect } from 'react';
import './ReadingBubble.css';

const ReadingBubble = () => {
  // 1. We name our state variable and its "setter" function
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    const pageHeight = document.body.scrollHeight - window.innerHeight;

    if (pageHeight > 0) {
      const percent = (currentScroll / pageHeight) * 100;
      // 2. FIX IS HERE: We must use the exact name we defined above
      setScrollPercentage(Math.min(percent, 100));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bubble-container">
      <div 
        className="bubble-fill" 
        style={{ transform: `translateY(${100 - scrollPercentage}%)` }} 
      />
      <span className="bubble-text">
        {Math.round(scrollPercentage)}%
      </span>
    </div>
  );
};

export default ReadingBubble;