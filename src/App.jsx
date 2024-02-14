import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import FlowerSelect from './components/FlowerSelect';
import BouquetSizeSelector from './components/BouquetSize';
import FlowerTypeButton from './components/FlowerTypeButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import dummyData from './components/dummyData';

const App = () => {
  const [bouquetSize, setBouquetSize] = useState('Medium');
  const [selectedFlowerType, setSelectedFlowerType] = useState('');
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

      <h1>Bloomcrafter</h1>
      {/* you can delete this... this is just temporary */}
      <div className="flower-types-container" style={{outline: "1px solid black", maxWidth: "50%", justifyContent: "center"}}>
        <div className="select-focal">
          <h2>Focal</h2>
        </div>
        <div className="select-filler">
          <h2>Filler</h2>
        </div>
        <div className="select-foliage">
          <h2>Foliage</h2>
        </div>
      </div>

      <BouquetSizeSelector bouquetSizeSelection={bouquetSize} setBouquetSize={setBouquetSize} />

      <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="filler" />
      <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="focal" />
      <FlowerTypeButton flowerType={selectedFlowerType} setFlowerType={setSelectedFlowerType} value="foliage" />

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
      {console.log(dummyData)}
      {/* todo: flowershop component (name WIP) needs to get a filtered list of data (based on type of flower (foliage,focal etc)), then needs to access fields like 
      price and stuff */}
      {/* <FlowerShop flowerList={dummyData} /> */}
      {/* <FlowerSelect someListOfFlowers={["Rose", "Daisy", "Tulip", "Sunflower"]} /> */}
      
    </div>
  );
};

export default App;
