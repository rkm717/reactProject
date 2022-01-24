import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const btnupclick = ()=> {
      //console.log("Uppercase was clicked",+ text);
      let newText = text.toUpperCase();
      setText(newText);
    }

    const btnloclick = ()=> {
      //console.log("Uppercase was clicked",+ text);
      let newText = text.toLowerCase();
      setText(newText);
    }

    const btnclearclick = ()=> {
      let newText = '';
      setText(newText);
    }

  const handleOnhange = (event)=> {
     // console.log("Change to Uppercase");
      setText(event.target.value);
  }

    return (
      <>
      <div className="container my-2" style={{color: props.mode ==='dark'?'black':'white'}}>

        <div className="mb-3">
        <h2>{props.heading}  </h2>
        <textarea className="form-control" value={text} onChange={handleOnhange}  id="myBox" rows="8"></textarea>

        <button className="btn btn-primary mx-2" onClick={btnupclick} >Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={btnloclick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={btnclearclick} >Clear Text</button>
        </div>
        </div>

        <div className="container my-2" style={{color: props.mode ==='dark'?'black':'white'}}>
          <h3>Your Text Summary</h3>
          <p>{text.split(" ").length} Word and {text.length} Charactors </p>

          <h3>Privew</h3>
          <p>{text}</p>
        </div>
      </>  
    )
}
