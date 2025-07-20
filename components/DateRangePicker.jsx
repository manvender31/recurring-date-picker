import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const DateRangePicker = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrence();

  return (
    <div className="mb-3">
      <label className="form-label">Start Date:</label>
      <input
        type="date"
        className="form-control mb-2"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label className="form-label">End Date (optional):</label>
      <input
        type="date"
        className="form-control"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </div>
  );
};

export default DateRangePicker;