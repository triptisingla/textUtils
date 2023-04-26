import React,{useState} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import SpeechToText from './components/SpeechToText';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      // document.body.style.backgroundImage=URL("https://www.fnordware.com/superpng/pnggradHDrgba.png")
      document.body.style.backgroundColor='rgb(32 43 53)'
      document.body.style.color='white'
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }

  const togglePalette=()=>{
    if(palette==='#345B63')
    setPalette('light')
    else
    setPalette('#345B63')
  }

  
  const [mode,setMode]=useState('light')
  const [palette,setPalette]=useState('light')

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
      {/* <Navbar/> */}
      <Router>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} togglePalette={togglePalette}/>

      <div className="container">

      <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>
            
          </Route>
          
          <Route exact path="/"  element= {<TextForm heading="Enter the text to analyze" mode={mode} palette={palette}/>}>
           
          </Route>
          <Route exact path="/speechToText"  element= {<SpeechToText mode={mode}/>}>
           
          </Route>
        </Routes>
      </div>

      </Router>
      {/* <div className="container">
      <SpeechToText/>
      </div> */}

    
      
    </>
  );
}

export default App;
