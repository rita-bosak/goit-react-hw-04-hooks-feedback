import { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodBtn = () => {
    setGood(good + 1);
  };

  const handleNeutralBtn = () => {
    setNeutral(neutral + 1);
  };

  const handleBadBtn = () => {
    setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = (good / countTotalFeedback()) * 100;
    return Math.round(positiveFeedbackPercentage);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options="Good" onLeaveFeedback={handleGoodBtn} />
        <FeedbackOptions options="Neutral" onLeaveFeedback={handleNeutralBtn} />
        <FeedbackOptions options="Bad" onLeaveFeedback={handleBadBtn} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
