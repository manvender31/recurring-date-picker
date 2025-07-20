import React, { useEffect } from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const CalendarPreview = () => {
  const {
    recurrence,
    customPattern,
    startDate,
    endDate,
    previewDates,
    setPreviewDates,
  } = useRecurrence();

  useEffect(() => {
    if (!startDate || !customPattern.interval) return;

    const result = [];
    const interval = parseInt(customPattern.interval) || 1;
    const maxCount = 20;
    let current = new Date(startDate);
    let count = 0;

    while (count < maxCount) {
      const dateStr = current.toISOString().split('T')[0];

      if (!endDate || dateStr <= endDate) {
        result.push(dateStr);
      }

      switch (recurrence) {
        case 'daily':
          current.setDate(current.getDate() + interval);
          break;
        case 'weekly':
          current.setDate(current.getDate() + interval * 7);
          break;
        case 'monthly':
          current.setMonth(current.getMonth() + interval);
          break;
        case 'yearly':
          current.setFullYear(current.getFullYear() + interval);
          break;
        default:
          break;
      }

      count++;
    }

    setPreviewDates(result);
  }, [startDate, endDate, recurrence, customPattern, setPreviewDates]);

  return (
    <div className="mt-4">
      <h5>Preview Dates:</h5>
      {previewDates.length === 0 ? (
        <p className="text-muted">Select options to see recurring dates.</p>
      ) : (
        <ul className="list-group">
          {previewDates.map((date, idx) => (
            <li key={idx} className="list-group-item">
              {date}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CalendarPreview; 