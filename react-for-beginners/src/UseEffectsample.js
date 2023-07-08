// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1 );
  const onChange = (e) => setKeyword(e.target.value);
  console.log("i run all the time");
  
  useEffect(()=>{
    console.log("i run only once.");
  }, []);
  useEffect(()=>{
    console.log("i run when 'keyword' changes.");
  }, [keyword]);
  useEffect(()=>{
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(()=>{
    console.log("I run when keybord & counter changes.");
  }, [keyword,counter]);
  return (
    <div>
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
        >

        </input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
