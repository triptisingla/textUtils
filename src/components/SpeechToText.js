import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function SpeechToText() {
    // const [t, setT] = useState('d')
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    // const handleTChange=(ev)=>{
    //     setT(ev.target.value)
        
    // }
    
    return (
        <>
            <div className='container my-4'>
                <label htmlFor="InputText"></label>
                {/* <input type="text" id='InputText' value={t} onChange={handleTChange}/> */}
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button className='btn btn-secondary mx-1' onClick={SpeechRecognition.startListening}>Start</button>
                <button className='btn btn-secondary mx-1' onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className='btn btn-secondary mx-1' onClick={resetTranscript}>Reset</button>
            </div>
            {/* <input type="text" value={transcript} onChange={handleTransChange}/> */}
            <p>{transcript}</p>
        </>
    )
}
