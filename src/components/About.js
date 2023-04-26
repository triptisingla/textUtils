import React from 'react'

export default function About(props) {

    return (
        <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}>
            <h1>About You</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h6>Tell us about yourself</h6>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show " style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} data-bs-parent="#accordionExample">
                        <textarea className="accordion-body form-control " style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}>
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </textarea>
                    </div>
                </div>
                <div className="accordion-item ">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h6>Your Aim and education</h6>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} data-bs-parent="#accordionExample">
                        <textarea className="accordion-body form-control " style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}>
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </textarea>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <h6>Your hobbies</h6>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}} data-bs-parent="#accordionExample">
                    <textarea className="accordion-body form-control " style={{backgroundColor:props.mode==='dark'?'rgb(32 43 53)':'white',color: props.mode==='light'?'black':'white'}}>
                            {/* <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                        </textarea>
                    </div>
                </div>
            </div>

            {/* <div className="form-check form-switch my-3">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={toggleStyle} />
                <label className="form-check-label" for="flexSwitchCheckChecked">{toggleText}</label>
            </div> */}
            {/* <button className='btn btn-primary my-3' onClick={toggleStyle}>{toggleText}</button> */}
        </div>
    )
}
