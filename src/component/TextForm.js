import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick=()=>{
      let newText = text.toUpperCase();
        setText(newText)
    }
    const handleTolo=()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }
    const handleToclear=()=>{
      let newText = '';
      setText(newText)
    }

    const removespace=()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const CopyText=()=>{
      let text= document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);

    }

    const handleOnchange=(event)=>{
        setText(event.target.value)
    }
    
    const [text, setText] = useState("Enter you text here");
    //setText = "This is wrong way"
    //setText("This is write way")

  return (
    <>
    <div className='container my-3'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>{props.title}</h3>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Full Name"
          style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{color:props.mode==='dark'?'white':'black'}}>
          <h3>{props.title_2}</h3>
        </label>
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          rows="4"
          onChange={handleOnchange}
          style={{backgroundColor:props.mode==='dark'?'#042743':'white', color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button disabled = {text.length===0} className="btn btn-primary my-1" onClick={handleUpclick}>Convert Uppercase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleToclear}>Clear text</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleTolo}>Convert Lowecase</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={removespace}>Remove Extra Space</button>
      <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={CopyText}>Copy Text</button>
    </div>
    <div className="container my-3" >
      <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Summary is: </h2>
      <p style={{color:props.mode==='dark'?'white':'black'}}>Your words are {text.split(/\s+/).filter((element)=>{return element.length!==0}).length } <br/> Your charactors are: {text.length}</p>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes for read above passage. </p>
      <h2 style={{color:props.mode==='dark'?'white':'black'}}>Preview:</h2>
      <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
    </div>
    </> 
  );
}
