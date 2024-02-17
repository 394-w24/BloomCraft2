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
import FinalCart from './components/FinalCart';

const App = () => {
  const [selectedFlowerType, setSelectedFlowerType] = useState('Focal');
  const [focalFlowers, setFocalFlowers] = useState([]);
  const [fillerFlowers, setFillerFlowers] = useState([]);
  const [foliageFlowers, setFoliageFlowers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartView, setCartView] = useState(false);

  const calculatePrice = () => {
    let sum = 0;
    focalFlowers.forEach(flower => {
      sum += flower.price * flower.quantity;
    });
    fillerFlowers.forEach(flower => {
      sum += flower.price * flower.quantity;
    });
    foliageFlowers.forEach(flower => {
      sum += flower.price * flower.quantity;
    });
    setTotalPrice(sum);
    console.log(totalPrice);
  }

  const updateQuantity = (index, newQuantity) => {
    if (selectedFlowerType === 'Focal') {
      const updatedFlowers = [...focalFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter((flower, i) => i !== index);
        setFocalFlowers(filteredFlowers);
      } else {
        setFocalFlowers(updatedFlowers);
      }
    } else if (selectedFlowerType === 'Filler') {
      const updatedFlowers = [...fillerFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter((flower, i) => i !== index);
        setFillerFlowers(filteredFlowers);
      } else {
        setFillerFlowers(updatedFlowers);
      }
    } else {
      const updatedFlowers = [...foliageFlowers];
      updatedFlowers[index].quantity = newQuantity;
      if (newQuantity === 0) {
        const filteredFlowers = updatedFlowers.filter((flower, i) => i !== index);
        setFoliageFlowers(filteredFlowers);
      } else {
        setFoliageFlowers(updatedFlowers);
      }
    }
  }
  

  useEffect(() => {
    calculatePrice();
  }, [focalFlowers, fillerFlowers, foliageFlowers]);


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
            <IconButton color="inherit" aria-label="cart" onClick={() => setCartView(!cartView)}>
              <ShoppingCartIcon style={{ scale: '1.5' }} />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* <BouquetSizeSelector bouquetSizeSelection={bouquetSize} setBouquetSize={setBouquetSize} /> */}
        {cartView ?
          <>
            <ArrowBackIcon style={{ left: '10', top: '10vh', position: 'absolute', scale: '1.5' }}
              onClick={() => setCartView(false)} />
            <FinalCart focalFlowers={focalFlowers} fillerFlowers={fillerFlowers} foliageFlowers={foliageFlowers} />
            <b style={{ fontSize: "1.5rem" }}>{`Total Price: $${totalPrice}.00`}</b>
          </> :
          <>
            <div className="flower-type-button-container" style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
              <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="Filler" />
              <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="Focal" />
              <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="Foliage" />
            </div>
            <h3>{`${selectedFlowerType} Flowers `}</h3>
            <Cart list={selectedFlowerType === 'Focal' ? focalFlowers : selectedFlowerType === 'Filler' ? fillerFlowers : foliageFlowers} updateQuantity={updateQuantity} />
            <b>{`Total Price: $${totalPrice}.00`}</b>

            <IconButton color="inherit" aria-label="cart" onClick={() => setCartView(!cartView)}>
              <ShoppingCartIcon style={{ scale: '1.5' }} /> Check out
            </IconButton>

            <div style={{ backgroundColor: '#DAF7A6' }}>
              {/* {console.log(dummyData)} */}
              {/* todo: flowershop component (name WIP) needs to get a filtered list of data (based on type of flower (foliage,focal etc)), then needs to access fields like 
      price and stuff */}

              <FlowerShop flowerList={dummyData}
                selectedFlowerType={selectedFlowerType}
                typeList={selectedFlowerType === 'Focal' ? focalFlowers
                  : selectedFlowerType === 'Filler' ? fillerFlowers
                    : foliageFlowers}
                setTypeList={selectedFlowerType === 'Focal' ? setFocalFlowers
                  : selectedFlowerType === 'Filler' ? setFillerFlowers
                    : setFoliageFlowers
                }
                calculatePrice={calculatePrice}
              />
            </div>

          </>}

      </div>

    </ThemeProvider>
  );
}

export default App;
