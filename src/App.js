import React,{useState} from "react";
import './App.css';

function App() {

  const [inputText, setInputText]=useState("");
  const [items,setItems]=useState([]);


function handleChange(event){

  const{value,name}=event.target;
     console.log(name);

     setInputText(value);
}

function handleClick(){
      setItems((prevItems)=>{

        return [...prevItems,inputText]
      })
}

  return (
    <React.Fragment>
      <div style={{backgroundColor:"#FC9902"}}>
        <h1 style={{padding:"0px 0px 0px 40px"}}>TODO-APP</h1>
      </div>
  <div className="box">
      <div className="app">
      <h1 style={{backgroundColor:"#FC9902"}}>Todo App</h1>
      <br/>
      <input type="text" placeholder="Enter the task" name="task" onChange={handleChange}/>
      <button onClick={handleClick} className="btn">Add</button>
      <br/>
      <br/>
      <h4>Your Tasks</h4>
      <br/>
      {items.map((todoText)=>{
        return <li>{todoText}</li>
      })}
    </div>
  </div>

  </React.Fragment>
  );
}

export default App;
