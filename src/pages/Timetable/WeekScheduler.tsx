// WeekScheduler.tsx
// WeekScheduler.tsx

import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import DayTimetable from './DayTimetable';

interface WeekSchedulerProps {
  startDate: Date;
}

const WeekScheduler: React.FC<WeekSchedulerProps> = ({ startDate }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        Week Scheduler
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {days.map((day, index) => (
          <Paper key={index} elevation={3} style={{ flex: 1, padding: 10 }}>
            <Typography variant="h6" align="center" gutterBottom>
              {day}
            </Typography>
            <DayTimetable startDate={startDate} dayIndex={index} />
          </Paper>
        ))}
      </div>
    </Container>
  );
};

export default WeekScheduler;
