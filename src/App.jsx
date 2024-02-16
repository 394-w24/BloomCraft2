import { useState, useEffect } from 'react';

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles'


import logo from './logo.png';
import './App.css';
import Container from '@mui/material/Container';
import FlowerSelect from './components/FlowerSelect';
import BouquetSizeSelector from './components/BouquetSize';
import FlowerTypeButton from './components/FlowerTypeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import dummyData from './components/dummyData';
import FlowerShop from './components/FlowerShop';
import Cart from './components/Cart';
const App = () => {
  const [selectedFlowerType, setSelectedFlowerType] = useState('focal');
  const [focalFlowers, setFocalFlowers] = useState([]);
  const [fillerFlowers, setFillerFlowers] = useState([]);
  const [foliageFlowers, setFoliageFlowers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const calculatePrice = () => {
    let sum = 0;
    focalFlowers.forEach(flower => {
      sum += flower.price*flower.quantity;
    });
    fillerFlowers.forEach(flower => {
      sum += flower.price*flower.quantity;
    });
    foliageFlowers.forEach(flower => {
      sum += flower.price*flower.quantity;
    });
    setTotalPrice(sum);
    console.log(totalPrice);
  }


  const theme = createTheme({
    palette: {
      primary: {
        main: '#FFDB58', // Mustard color
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        <AppBar position="static" style={{ backgroundColor: 'mustard !important' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <div style={{ margin: '0 auto' }}>
              <img src={logo} alt="Logo" className="App-logo" />
            </div>
            <IconButton color="inherit" aria-label="cart">
              <ShoppingCartIcon />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* <BouquetSizeSelector bouquetSizeSelection={bouquetSize} setBouquetSize={setBouquetSize} /> */}

        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="filler" />
        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="focal" />
        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="foliage" />

        <h3>{`Selected: ${selectedFlowerType} flowers `}</h3>
        <Cart list={focalFlowers.concat(fillerFlowers).concat(foliageFlowers)} />
        <div style={{ backgroundColor: '#DAF7A6' }}>
          {/* {console.log(dummyData)} */}
          {/* todo: flowershop component (name WIP) needs to get a filtered list of data (based on type of flower (foliage,focal etc)), then needs to access fields like 
      price and stuff */}
        
          <FlowerShop flowerList={dummyData}
            typeList={selectedFlowerType === 'focal' ? focalFlowers
              : selectedFlowerType === 'filler' ? fillerFlowers
                : foliageFlowers}
            setTypeList={selectedFlowerType === 'focal' ? setFocalFlowers
              : selectedFlowerType === 'filler' ? setFillerFlowers
                : setFoliageFlowers
              }
            calculatePrice={calculatePrice}
          />
        
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
