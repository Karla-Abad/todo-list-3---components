import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const taskArray = [];
  const [currentTaskArray, setCurrentTaskArray] = useState(taskArray);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newTask.length === 0) {
      return;
    }
    setCurrentTaskArray([
      ...currentTaskArray,
      { text: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const handleDelete = (deleteIndex) => {
    const filteredTaskArray = currentTaskArray.filter((item, index) => {
      return index !== deleteIndex;
    });

    setCurrentTaskArray(filteredTaskArray);
  };

  const handleCheckedBox = (i) => {
    const updatedTaskArray = currentTaskArray.map((item, index) => {
      if (i === index) {
        item.completed = !item.completed;
      }
      return item;
    });
    setCurrentTaskArray(updatedTaskArray);
  };

  const checkedStyle = (index) => {
    if (currentTaskArray[index].completed === true) {
      return "strike";
    } else {
      return "standard";
    }
  };

  return (
    <div className="App">
      <div>
        <Form
          handleSubmit={handleSubmit}
          newTask={newTask}
          setNewTask={setNewTask}
          currentTaskArray={currentTaskArray}
          setCurrentTaskArray={setCurrentTaskArray}
        />
        <Display
          currentTaskArray={currentTaskArray}
          handleCheckedBox={handleCheckedBox}
          checkedStyle={checkedStyle}
          handleDelete={handleDelete}
          setCurrentTaskArray={setCurrentTaskArray}
        />
      </div>
      <div className="pendingTasks">
        <h3>You have {currentTaskArray.length} task(s) pending.</h3>
      </div>
    </div>
  );
}

export default App;
