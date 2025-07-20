import { createContext, useContext, useState } from 'react';

const RecurrenceContext = createContext();

export const RecurrenceProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState('daily');
  const [customPattern, setCustomPattern] = useState({});
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [previewDates, setPreviewDates] = useState([]);

  return (
    <RecurrenceContext.Provider
      value={{
        recurrence,
        setRecurrence,
        customPattern,
        setCustomPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        previewDates,
        setPreviewDates,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  );
};

export const useRecurrence = () => useContext(RecurrenceContext);