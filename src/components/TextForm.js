import React, { useState } from 'react'


export default function TextForm(props) {


  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value)
  }


  const handleUpClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.toUpperCase();
    setText(newText)
  }


  const handleLoClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.toLowerCase();
    setText(newText)
  }

  const handleFrClick = (ev) => {
    // setText("uppercase called")
    // console.log(text)
    // console.log(ev)

    const newText = text.replaceAll(fWord, rWord);
    setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg)

    const toggle = document.getElementById('toggle')
    if (toggle.textContent === 'Speak') {
      toggle.innerHTML = "Stop";
    }
    else {
      toggle.innerHTML = "Speak";
      window.speechSynthesis.cancel();
    }
  }

  const handleFindChange = (ev) => {
    // const findWord=ev.target.value;
    setFWord(ev.target.value);
  }

  const handleReplaceChange = (ev) => {
    // const findWord=ev.target.value;
    setRWord(ev.target.value);
  }



  const [text, setText] = useState('Enter your text here');
  const [fWord, setFWord] = useState('')
  const [rWord, setRWord] = useState('')
  // const [isActive,setIsActive]=useState(false);
  // console.log(text);
  // console.log(setText);
  // setText("enter")
  return (
    <>
      <div className="conatiner ">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary' id='toggle' onClick={speak}>Speak</button>
        <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to LowerCase</button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary</h2>

        <p>{text.split(" ").length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").length} Minutes Read</p>

        <h3>Preview</h3>

        <p>{text}</p>
      </div>

      <div className="conatiner ">

        <h6>Find word</h6>
        <div className="mb-3">
          <textarea className="form-control" id="Find" rows="1" value={fWord} onChange={handleFindChange}></textarea>
        </div>

        <h6>Replace word</h6>
        <div className="mb-3">
          <textarea className="form-control" id="Replace" rows="1" value={rWord} onChange={handleReplaceChange}></textarea>
        </div>

        <button className='btn btn-primary mx-1' onClick={handleFrClick}>Replace word</button>

      </div>

      {/* <button className='btn btn-primary' onClick={handleFancyClick}>Fanct Generator</button> */}
      {/* <button className='btn btn-primary'>Mode</button> */}


    </>
  )
}
