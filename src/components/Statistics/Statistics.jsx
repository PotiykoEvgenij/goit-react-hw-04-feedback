import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

export const Statistics = ({ feedback }) => {
  const { good, neutral, bad } = feedback;

  const total = good + neutral + bad;
  const positivePercentage = total ? (good / total) * 100 : 0;

  return (
    <div className={styles.statistics}>
      <h2>Statistics</h2>
      {total > 0 ? (
        <div>
          <p>Good: {good}</p>
          <p>Neutural: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {Math.floor(positivePercentage)}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  }).isRequired
};