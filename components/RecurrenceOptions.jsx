import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const RecurrenceOptions = () => {
  const { recurrence, setRecurrence } = useRecurrence();

  const handleChange = (e) => {
    setRecurrence(e.target.value);
  };

  return (
    <div className="mb-3">
      <label className="form-label">Recurring Option:</label>
      <select className="form-select" value={recurrence} onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  );
};

export default RecurrenceOptions;