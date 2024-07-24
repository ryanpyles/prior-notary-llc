import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const CalendarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const CalendarPicker = styled(DatePicker)`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1rem;
`;

const Calendar = () => {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <CalendarContainer>
      <CalendarTitle>Select a Date</CalendarTitle>
      <CalendarPicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </CalendarContainer>
  );
};

export default Calendar;
