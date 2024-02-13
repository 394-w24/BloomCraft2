import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import FlowerSelect from './components/FlowerSelect';
import BouquetSize from './components/BouquetSize';

const App = () => {
  const [count, setCount] = useState(0);
  const [bouquetSize, setBouquetSize] = useState('Medium');
  let focalFlowers = [];
  let fillerFlowers = [];
  let folliageFlowers = [];

  const focalNumber = (num) => {
    for (let i = 0; i < num; i++) {
      focalFlowers.push(<FlowerSelect someListOfFlowers={["Red Rose", "Tulip", "Sunflower"]} />)
    }
  }

  const fillerNumber = (num) => {
    for (let i = 0; i < num; i++) {
      fillerFlowers.push(<FlowerSelect someListOfFlowers={["Baby's Breath", "Daisy", "Strawflower"]} />)
    }
  }

  const folliageNumber = (num) => {
    for (let i = 0; i < num; i++) {
      folliageFlowers.push(<FlowerSelect someListOfFlowers={["Eucalyptus", "Leather leaf", "Ivy"]} />)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hi</p>
      </header>
      <BouquetSize bouquetSize={bouquetSize} setBouquetSize={setBouquetSize} />

      {bouquetSize && <p>Focal</p>}
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
      
      {/* <FlowerSelect someListOfFlowers={["Rose", "Daisy", "Tulip", "Sunflower"]} /> */}
      
    </div>
  );
};

export default App;
