import { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  const handleAdd = () => {
    // e.preventDefault();
    if (inputValue.trim() !== "") {
      setTask((prevTasks) => [...prevTasks, inputValue]);
      setInputValue("");
    }
    console.log(inputValue);
  };
  const handleRemove = (index) => {
    const newTasks = task.filter((_, i) => i !== index);
    setTask(newTasks);
  };

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="add task here"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border-2 border-black"
          />
          <input
            onClick={handleAdd}
            className="px-2 border-2 bg-blue-500 border-black"
            type="button"
            value="Add"
          />
        </form>

        <ul>
          {task.map((taskItem, index) => {
            return (
              <>
                <li key={index}>
                  {taskItem}
                  <button
                    className="px-2 border-2 border-black"
                    onClick={() => handleRemove(index)}
                  >
                    &times;
                  </button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoApp;
