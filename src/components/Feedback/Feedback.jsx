import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.css'

export const Feedback = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.feedback}>
      <h2 className={styles.feedbackTitle}>Please leave feedback</h2>
        <div className={styles.feedbackButtons}>
        <button className={styles.smileyButton} onClick={() => onLeaveFeedback('good')}>
          <span role="img" aria-label="good" className={styles.smiley}>😃</span>
        </button>
        <button className={styles.smileyButton} onClick={() => onLeaveFeedback('neutral')}>
          <span role="img" aria-label="neutral" className={styles.smiley}>😐</span>
        </button>
        <button className={styles.smileyButton} onClick={() => onLeaveFeedback('bad')}>
          <span role="img" aria-label="bad" className={styles.smiley}>😞</span>
        </button>
        </div>
    </div>
  );
};

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired
};