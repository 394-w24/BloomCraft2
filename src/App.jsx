import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from '@mui/material/Container';
import FlowerSelect from './components/FlowerSelect';
import BouquetSize from './components/BouquetSize';

const App = () => {
  const [count, setCount] = useState(0);
  const [bouquetSize, setBouquetSize] = useState('');
  let focalFlowers = [];

  const focalNumber = (num) => {
    for (let i = 0; i < num; i++) {
      focalFlowers.push(<FlowerSelect someListOfFlowers={["Rose", "Daisy", "Tulip", "Sunflower"]} />)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <p>Hi</p>
      </header>
      <BouquetSize bouquetSize={bouquetSize} setBouquetSize={setBouquetSize} />

      {bouquetSize && <p>Focal</p>}
      {bouquetSize === "Small" &&
      <div>
        {focalNumber(3)}
        {focalFlowers.map((flower, index) => {
          return <div key={index}>{flower}</div>
        })}
        {console.log(focalFlowers)}
      </div>
      }

      
      {/* <FlowerSelect someListOfFlowers={["Rose", "Daisy", "Tulip", "Sunflower"]} /> */}
      
    </div>
  );
};

export default App;
