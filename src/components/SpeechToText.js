import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function SpeechToText(props) {
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

    
    return (
        <>
            <div className='container my-4' style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}>
                <label htmlFor="InputText"  style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}></label>
                <p>Microphone: {listening ? 'on' : 'off'}</p>
                <button className='btn btn-secondary mx-1' onClick={SpeechRecognition.startListening}>Start</button>
                <button className='btn btn-secondary mx-1' onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className='btn btn-secondary mx-1' onClick={resetTranscript}>Reset</button>
            </div>
            
            <textarea className={`form-control mb-3`} style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} rows={10} type="text" value={transcript} />
        </>
    )
}
