import { useState } from 'react';

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

const App = () => {
  const [bouquetSize, setBouquetSize] = useState('Medium');
  const [selectedFlowerType, setSelectedFlowerType] = useState('focal');
  const [focalFlowers, setFocalFlowers] = useState([]);
  const [fillerFlowers, setFillerFlowers] = useState([]);
  const [folliageFlowers, setFolliageFlowers] = useState([]);


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

        {/* 
      <h1>Bloomcrafter</h1>
      you can delete this... this is just temporary */}
        {/* <div className="flower-types-container" style={{outline: "1px solid black", maxWidth: "50%", justifyContent: "center"}}>
        <div className="select-focal">
          <h2>Focal</h2>
        </div>
        <div className="select-filler">
          <h2>Filler</h2>
        </div>
        <div className="select-foliage">
          <h2>Foliage</h2>
        </div>
      </div> */}

        {/* <BouquetSizeSelector bouquetSizeSelection={bouquetSize} setBouquetSize={setBouquetSize} /> */}

        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="filler" />
        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="focal" />
        <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="foliage" />

        <h3>{`Selected: ${selectedFlowerType} flowers `}</h3>

        {/* {bouquetSize && <p>Focal</p>}
      <div style={{display: "flex", justifyContent: "center"}}>
      {bouquetSize === "Small" &&
      <>
        {focalNumber(3)}
        {focalFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }
     

      {bouquetSize === "Medium" &&
      <>
        {focalNumber(6)}
        {focalFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }

      {bouquetSize === "Large" &&
      <>
        {focalNumber(9)}
        {focalFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }
      </div>

      {bouquetSize && <p>Filler</p>}
      <div style={{display: "flex", justifyContent: "center"}}>
      {bouquetSize === "Small" &&
      <>
        {fillerNumber(2)}
        {fillerFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}

      </>
      }

      {bouquetSize === "Medium" &&
      <>
        {fillerNumber(4)}
        {fillerFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }

      {bouquetSize === "Large" &&
      <>
        {fillerNumber(6)}
        {fillerFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }
      </div>

      {bouquetSize !== "Small" && <p>Foliage</p>}
      <div style={{display: "flex", justifyContent: "center"}}>
      {bouquetSize === "Medium" &&
      <>
        {folliageNumber(1)}
        {folliageFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      }

      {bouquetSize === "Large" &&
      <>
        {folliageNumber(2)}
        {folliageFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
      </>
      } 
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ArrowBackIcon />
          <span>Back</span>
        </div>
        <div>
          <ArrowForwardIcon />
          <span>Next</span>
        </div>
      </div>  */}
        <div style={{ backgroundColor: '#DAF7A6' }}>
          {console.log(dummyData)}
          {/* todo: flowershop component (name WIP) needs to get a filtered list of data (based on type of flower (foliage,focal etc)), then needs to access fields like 
      price and stuff */}
          <FlowerShop flowerList={dummyData}
            typeList={selectedFlowerType === 'focal' ? focalFlowers
              : selectedFlowerType === 'filler' ? fillerFlowers
                : folliageFlowers}
            setTypeList={selectedFlowerType === 'focal' ? setFocalFlowers
              : selectedFlowerType === 'filler' ? setFillerFlowers
                : setFolliageFlowers}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
