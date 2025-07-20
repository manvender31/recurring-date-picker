import React from 'react';
import { useRecurrence } from '../context/RecurrenceContext';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CustomizationOptions = () => {
  const { recurrence, customPattern, setCustomPattern } = useRecurrence();

  const handleIntervalChange = (e) => {
    setCustomPattern({ ...customPattern, interval: e.target.value });
  };

  const toggleDay = (day) => {
    const selectedDays = customPattern.days || [];
    if (selectedDays.includes(day)) {
      setCustomPattern({
        ...customPattern,
        days: selectedDays.filter((d) => d !== day),
      });
    } else {
      setCustomPattern({
        ...customPattern,
        days: [...selectedDays, day],
      });
    }
  };

  return (
    <div className="mb-3">
      <label className="form-label">Repeat every:</label>
      <input
        type="number"
        className="form-control"
        min="1"
        placeholder="e.g. 2"
        onChange={handleIntervalChange}
      />
      <span className="text-muted"> {recurrence === 'daily' ? 'days' : recurrence === 'weekly' ? 'weeks' : recurrence === 'monthly' ? 'months' : 'years'}</span>

      {recurrence === 'weekly' && (
        <div className="mt-3">
          <label className="form-label">Repeat on:</label>
          <div className="d-flex flex-wrap gap-2">
            {weekDays.map((day) => (
              <button
                key={day}
                type="button"
                className={`btn btn-sm ${
                  customPattern.days && customPattern.days.includes(day)
                    ? 'btn-primary'
                    : 'btn-outline-secondary'
                }`}
                onClick={() => toggleDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomizationOptions; 