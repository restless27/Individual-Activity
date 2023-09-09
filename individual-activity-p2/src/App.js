import React from 'react';
import './App.css';
import Button from './Button';
import TextField from './TextField';
import H2 from './H2';

function App() {
  return (
    <div className="App">
      <H2>Individual Activty P2: PART 2</H2>
      <div className="text-fields">
        <TextField variant="rounded" />
        <TextField variant="rounded" />
        <TextField variant="green" />
        <TextField variant="green" />
      </div>
      <div className="buttons">
        <Button color="red" text="Cancel" />
        <Button color="blue" text="Submit" />
      </div>
      <div className="image-container">
        <img src="image1.png" alt="Image 1" className="square-image" />
        <img src="image2.png" alt="Image 2" className="square-image" />
        <img src="image3.jpg" alt="Image 3" className="square-image" />
        <img src="image4.jpg" alt="Image 4" className="square-image" />
      </div>
    </div>
  );
}

export default App;

