import React from 'react';
import './App.css';
import Card from './components/Card.js';
import data from './atlas-of-remote-islands.js';

function App() {
  console.log(data);
  let island1 = data.islands[0]
  console.log (island1)
  
  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>
      
      <div className="container">
        <h2 className="section-title">Islands</h2>
        <ul className="cards">
          
          {/* <Card name={island1.name} description={island1.description} latitude={island1.coords.lat} longitude={island1.coords.lon} image={island1.image}/> */}
          {data.islands.map(island => {
              return (<Card island = {island} />)
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
