import "../App.css";
import React from "react";

const Form = (props) => {
  const {
    handleSubmit,
    newTask,
    setNewTask,
    currentTaskArray,
    setCurrentTaskArray,
  } = props;
  return (
    <div>
      <h1>Enter New Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          placeholder="Enter new task here..."
          onChange={(e) => setNewTask(e.target.value)}
        />
        <div>
          <button className="addBtn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
