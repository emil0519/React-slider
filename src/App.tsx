import React from 'react';
import './App.css';
import Slider from './Slider';
import img1 from "./img/c-01.png"




function App() {
  return (
   <Slider imgList={imgList}/>
  );
}

const imgList=[img1]

export default App;
