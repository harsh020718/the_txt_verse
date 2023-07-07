import React, { useState } from "react";

export default function TextForm(props) {


  const handleUpClick = () => {
    console.log("Button is Clicked");
   let  newText = text.toUpperCase();
   
   setText(newText);
   props.showAlert("Converted To UpperCase","success")
    //  setText("Your Text Is Changed Now") // ab text variable ki value "Your Text Is Changed Now" me badal gyi
  };
  const handleloClick = () => {
    let  newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success")
    };

    const handleClearClick = () =>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared!", "success");
    }
   
  const handlecolorClick = () => {
    
    let textarea = document.querySelector('textarea')
    textarea.style.color = 'green'
    };

    const handleCopy = () =>{
    var text = document.getElementById("mytextarea")
     text.select();
     navigator.clipboard.writeText(text.value)
     document.getSelection().removeAllRanges()
     props.showAlert("Copied to Clipboard!","success")

    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/)
      setText(newText.join(' '))
      props.showAlert("Extra Spaces Removed!", "success")
    }
  const ChangeTextArea = (event) => {
    console.log("Onchange");
    setText(event.target.value)
    // line no.10 me humne jo likha hai usey likhne se pehle text area editable nhi tha
    // kyuki uski value fixed thi jo ki {text} thi lekin jab humne onChange event ko fire
    // kiya tab usne hume 'event' diya jisse humne text ko nayi value di jo ki event.target.value thi
    // kyuki onChange event har ek edit par fire hoga jisse ki sabke liye alag 'event'
    // milga aur hum uske respect me text ko setText se nya text de sakte hai
  };
  const [text, setText] = useState("");
//    const myarray = text.split(' ')
// myarray.forEach((element)=>{
// if(element===""){
//   // myarray.length = myarray.length - 1
//   myarray.length = 0
// }
// })

  return (
   
    <>
    
    <div className="container" style = {{color:props.mode==='dark'?'white':'#042743'}} >
     
        <h1 id = 'heading'>{props.heading}</h1>
      <div className="mb-3">

        <textarea
          className="form-control my-5"
          
          value={text}
          onChange={ChangeTextArea}
          // style={{ color:textColor, backgroundColor:props.mode==='light'?'dark':'light'}}
          id="mytextarea"
          rows="8"
          style = {{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}
          // style = {{color:props.mode==='dark'?'white':'black'}}
          
        ></textarea>
      </div>
      <button id ='button1' className="btn btn-primary" onClick={handleUpClick}>
        Change To UpperCase
      </button>
      <button id ='button2' className="btn btn-primary mx-2 my-2" onClick={handleloClick}>
        Change To LowerCase
      </button>
      <button id ='button3' className="btn btn-primary mx-2 my-2" onClick={handlecolorClick}>
        Change The color
      </button>
      <button id ='button4' className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
        Clear Text
      </button>
      <button id ='button5' className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy Text
      </button>
      <button id ='button6' className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>
    </div>
    
    <div className="container my-5" style = {{color:props.mode==='dark'?'white':'#042743'}} id = 'mySummaryContainer'>
      <h1>Your Text Summary</h1>
     
      
      
      
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words {text.length} Characters </p>
      {/* filter ek function leta hai jo ki agar true return kare to wo element array me rahega 
      otherwise nhi rahega */}
      
      <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes You Will Take To Read The Text. </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Something In TextBox To Preview It Here'}</p>
    </div>
    </>
  );
}
