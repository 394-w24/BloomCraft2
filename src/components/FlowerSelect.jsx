import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FlowerSelect({someListOfFlowers}) {
  const [flower, setFlower] = useState('');

  const handleChange = (event) => {
    setFlower(event.target.value);
  };


  return (
    <Box sx={{ display: "flex", justifyContent: "center"}}>
      <FormControl sx={{minWidth: 120}} >
        <InputLabel id="demo-simple-select-label">Flower</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={flower}
          label="Flower"
          onChange={handleChange}
        >
          {someListOfFlowers.map((flower, index) => {
            return <MenuItem key={index} value={flower}>{flower}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  );
}