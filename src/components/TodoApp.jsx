import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setTask([...task, inputValue]);
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="add task here"
            value={inputValue}
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Add</button>
        </form>

        <ul>
          {task.map((inputValue, key) => {
            return (
              <>
                <li key={key}>{inputValue}</li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
