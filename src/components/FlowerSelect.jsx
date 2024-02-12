import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Container from '@mui/material/Container'

export default function FlowerSelect({someListOfFlowers}) {
  const [flower, setFlower] = useState('');

  const handleChange = (event) => {
    setFlower(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center"}}>
      <FormControl >
        <InputLabel id="demo-simple-select-label">Flower</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={flower}
          label="Flower"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}