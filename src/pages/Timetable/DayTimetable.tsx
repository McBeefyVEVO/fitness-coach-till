// DayScheduler.tsx
// DayTimetable.tsx

import React from 'react';
import { List, ListItem, Paper, Typography } from '@mui/material';

interface DayTimetableProps {
  startDate: Date;
  dayIndex: number;
}

const DayTimetable: React.FC<DayTimetableProps> = ({ startDate, dayIndex }) => {
  // You can customize the time intervals based on your needs
  const timeIntervals = [
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
  ];

  return (
    <Paper elevation={0} style={{ padding: 10 }}>
      <List>
        {timeIntervals.map((timeInterval, index) => (
          <ListItem key={index} disableGutters>
            <Typography>{timeInterval}</Typography>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default DayTimetable;
