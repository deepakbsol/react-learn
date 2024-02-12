import React,{useState} from 'react'

export default function Home(props) {
  const [data,changeData] = useState("");
  const upperCase=()=>{
    console.log(data)
    changeData(data.toUpperCase());
  }
  const lowerCase=()=>{
    changeData(data.toLowerCase());
  }
  const reset=()=>{
    changeData("");
  }
  const changeText=(event)=>{
    console.log(event.target.value)
    changeData(event.target.value);
    console.log(data)
  }
  return (
    <div className="form-group">
      <h1>Enter your Text</h1>
      <textarea className="form-control" id="exampleFormControlTextarea1"  rows="3"
      value={data} onChange={changeText}></textarea>
    
        <button type="button" onClick={upperCase} className="m-2 btn btn-primary">{props.upperCase}</button>
        <button type="button" onClick={lowerCase} className="m-2 btn btn-secondary">{props.lowerCase}</button>
        <button type="button" onClick={reset} className="m-2 btn btn-success">{props.reset}</button>
  </div>
  )
}
