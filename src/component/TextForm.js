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
    const handleOnchange=(event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter you text here");
    //setText = "This is wrong way"
    //setText("This is write way")

  return (
    <>
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          <h3>{props.title}</h3>
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <h3>{props.title_2}</h3>
        </label>
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          rows="4"
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpclick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleTolo}>Convert Lowecase</button>
      <button className="btn btn-primary mx-2" onClick={handleToclear}>Clear text</button>
    </div>
    <div className="container my-3" >
      <h2>Your Summary is: </h2>
      <p>Your words are {text.split(" ").length} <br/> Your charactors are: {text.length}</p>
      <p>{0.008 * text.split(" ").length} minutes for read above passage. </p>
      <h2>Preview:</h2>
      <p>{text}</p>
    </div>
    </>
    
    
  );
}
