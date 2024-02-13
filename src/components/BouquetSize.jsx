import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FlowerSelect from './FlowerSelect';
// import Container from '@mui/material/Container'

export default function BouquetSize({ bouquetSize, setBouquetSize }) {

    const handleChange = (event) => {
        setBouquetSize(event.target.value);
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl sx={{ minWidth: 140 }} >
                <InputLabel id="demo-simple-select-label">Bouquet Size</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={bouquetSize}
                    label="Bouquet Size"
                    onChange={handleChange}
                >
                    <MenuItem value={"Small"}>Small</MenuItem>
                    <MenuItem value={"Medium"}>Medium</MenuItem>
                    <MenuItem value={"Large"}>Large</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}