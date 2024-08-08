import React from 'react';
import './App.css';
import Box from './componets/Box';

function App() {
  return (
    <div style={{marginLeft:"100px",display:"flex",flexDirection:"column"}}>
      <h3>letter Counter</h3>
      <textarea style={{ width: '400px', height: '200px' }} placeholder='enter your name'></textarea>
      <br />
      <div style={{ display: "flex", }}>
        <Box label1={'0'} br lable2={'sentence'} />
        <Box label1={'0'} br lable2={'sentence'} />
        <Box label1={'0'} br lable2={'sentence'} />
    </div>

     
    </div>

  
  );
}

export default App;
