import React, { useState } from 'react';
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };

  return (
    <div>
      <Feedback onLeaveFeedback={handleFeedback} />
      <Statistics feedback={feedback} />
    </div>
  );
};
