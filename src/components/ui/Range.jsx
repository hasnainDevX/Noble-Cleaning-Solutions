"use client";
import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

const RangeSlider = ({ value, handleChange }) => {
  return (
    <Box sx={{ width: 250, paddingX: "1.1rem" }}>
      <Typography className='-translate-x-6 px-3' gutterBottom color='gray'>House Size (sq.ft)</Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={100}
        max={9000}
        step={1}
        marks={[
          { value: 100, label: '100' },
          { value: 9000, label: '9,000' },
        ]}
        valueLabelFormat={(value) => `${value} sq.ft`}
        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: '#AED6F1',
          },
          '& .MuiSlider-track': {
            backgroundColor: '#3C8DBC',
          },
          '& .MuiSlider-rail': {
            backgroundColor: '#AED6F1',
          },
          '& .MuiSlider-markLabel': {
            color: 'blue',
          },
        }}
      />
      <Typography mt={2} className='!text-xs text-gray-800 -translate-x-3'>
        Selected range: {value[0]} - {value[1]} sq.ft
      </Typography>
    </Box>
  );
};

export default RangeSlider;
