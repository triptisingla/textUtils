import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = (ev) => {
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = (ev) => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleFrClick = (ev) => {
    const newText = text.replaceAll(fWord, rWord);
    setText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    const toggle = document.getElementById("toggle");
    if (toggle.textContent === "Speak") {
      
      toggle.innerHTML = "Stop";
      
    }
    else {
      toggle.innerHTML = "Speak";
      window.speechSynthesis.cancel();
    }

    // if(speechSynthesis!=true)
    // {
    //   toggle.innerHTML="Speak";
    // }
  };

  const handleFindChange = (ev) => {
    // const findWord=ev.target.value;
    setFWord(ev.target.value);
  };

  const handleReplaceChange = (ev) => {
    // const findWord=ev.target.value;
    setRWord(ev.target.value);
  };

  const [text, setText] = useState("Enter your text here");
  const [fWord, setFWord] = useState("");
  const [rWord, setRWord] = useState("");

  return (
    <>
      <div className="conatiner ">
        <h1>{props.heading}</h1>

        <textarea
          className={`form-control mb-3`}
          id="myBox"
          rows="8"
          value={text}
          style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white', color: props.mode === "light" ? "black" : "white"}}
          onChange={handleOnChange}
        ></textarea>

        <button className="btn btn-primary mx-1" onClick={handleUpClick }>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary" id="toggle" onClick={speak} >
          Speak
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <p>
          {text.length===0 ||text.charAt(text.length-1)===' '?text.split(/[\s,]+/).length-1:text.split(/[\s,]+/).length} <b> words </b> and {text.length} <b> characters </b>
        </p>

        <p>{0.008 * (text.length===0 ||text.charAt(text.length-1)===' '?text.split(/[\s,]+/).length-1:text.split(/[\s,]+/).length)} <b> Minutes Read </b> </p>
      </div>

      <div className="conatiner ">
        <h6>Find word</h6>
        <textarea
          className={`form-control mb-3`}
          id="Find"
          rows="1"
          style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}
          value={fWord}
          onChange={handleFindChange}
        ></textarea>
        <h6>Replace word</h6>
        <textarea
          className={`form-control mb-3`}
          id="Replace"
          rows="1"
          value={rWord}
          style={{backgroundColor: props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}
          onChange={handleReplaceChange}
        ></textarea>
        <button className="btn btn-primary mx-1" onClick={handleFrClick}>
          Replace word
        </button>
      </div>
    </>
  );
}
