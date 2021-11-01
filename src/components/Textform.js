import React, { useState } from 'react'


export default function Textform(props) {


    //handling uppercase button
    const handleUClick = ()=>{
        console.log('Uppercase clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }   

    //handling lowercase button

    const handleLClick = ()=>{
        console.log('Lowercase clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }   
    
    //handling cleartext
    const handleClear = ()=>{
        console.log('Cleared');
        setText('');
        props.showAlert("Cleared","success");

    }   


    //handling invert text
    const handleInvert = ()=>{
        console.log('Invertcase Clicked');
        let invertedText ="";
        for(let i=0; i<text.length; i++) {
            let ch = text.charAt(i);
            let asc = ch.charCodeAt(0);
            if(asc>=97){
                ch = ch.toUpperCase();
            }
            else{
                ch = ch.toLowerCase();
            }
            invertedText+=ch;
        }
        setText(invertedText);    
        props.showAlert("Inverted Case","success");

    }

    //handling copy text
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","success");

    }


    //handling change in text area
    const handleOnChange =(event)=>{
        console.log('Handle on change fired')
        setText(event.target.value)
    }


    //setting text state
    const [text, setText] = useState('');





    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange= {handleOnChange} id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'rgb(33,37,41)',color:props.mode==='light'?'black':'white'}}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUClick}>Convert to UpperCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLClick}>Convert to LowerCase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleInvert}>Invert Case</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>


        </div>
        <div className="my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>
            <p>{text.split(" ").length*0.008} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
