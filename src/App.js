import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import SpeechToText from './components/SpeechToText';
// import About from './components/About';
import React,{useState} from 'react'


function App() {

  const [mode,setMode]=useState('light')

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
      {/* <Navbar/> */}

      <Navbar title="TextUtils" mode={mode}/>

      <div className="container">
      <TextForm heading="Enter the text to analyze"/>
      </div>

      <div className="container">
      <SpeechToText/>
      </div>

      {/* <div className="container my-3">
      <About/>
      </div> */}

      
    </>
  );
}

export default App;
