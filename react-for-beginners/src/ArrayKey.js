import { useState } from "react";
function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] =useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if(toDo ==="") return;
    setToDos(currentArray => [toDo, ...currentArray])
    setToDo("");
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My ToDo({toDos.length})</h1>
      <form>
        <input 
          value={toDo} 
          onChange={onChange} 
          type="text" 
          placeholder="Write your to do..."
          ></input>
          <button onClick={onSubmit}>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => 
        <li key={index}>{item}</li>)
      }
      </ul>
    </div>
  );
}

export default App;
