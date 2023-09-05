// pages/appointment.tsx

import React, { useState } from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const AppointmentPage: React.FC = () => {
  const [consultTopic, setConsultTopic] = useState<string>('');
  const [monthYear, setMonthYear] = useState<string>('');
  const [schedule, setSchedule] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');

  const handleBooking = () => {
    // Implement your booking logic here
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Book an Appointment
      </Typography>

      {/* Consult Topic Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Consult Topic</InputLabel>
        <Select
          value={consultTopic}
          onChange={(e) => setConsultTopic(e.target.value as string)}
        >
          <MenuItem value="topic1">Topic 1</MenuItem>
          <MenuItem value="topic2">Topic 2</MenuItem>
          {/* Add more topics as needed */}
        </Select>
      </FormControl>

      {/* Month + Year Selection Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Month + Year</InputLabel>
        <Select
          value={monthYear}
          onChange={(e) => setMonthYear(e.target.value as string)}
        >
          <MenuItem value="2023-01">January 2023</MenuItem>
          <MenuItem value="2023-02">February 2023</MenuItem>
          {/* Add more months + years as needed */}
        </Select>
      </FormControl>

      {/* Select Schedule */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Schedule</InputLabel>
        <Select
          value={schedule}
          onChange={(e) => setSchedule(e.target.value as string)}
        >
          <MenuItem value="schedule1">Schedule 1</MenuItem>
          <MenuItem value="schedule2">Schedule 2</MenuItem>
          {/* Add more schedules as needed */}
        </Select>
      </FormControl>

      {/* Select Time Slot */}
      <FormControl fullWidth margin="normal">
        <InputLabel>Select Time Slot</InputLabel>
        <Select
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value as string)}
        >
          <MenuItem value="slot1">Time Slot 1</MenuItem>
          <MenuItem value="slot2">Time Slot 2</MenuItem>
          {/* Add more time slots as needed */}
        </Select>
      </FormControl>

      {/* Booking Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleBooking}
        disabled={!consultTopic || !monthYear || !schedule || !timeSlot}
      >
        Book Appointment
      </Button>
    </Container>
  );
};

export default AppointmentPage;
