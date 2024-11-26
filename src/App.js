// Michael Reyes-Casanova
// 11/20/24
// Performance Assessment 3.4

// Main app component that renders the task menu and the components for each task

import React, { useState } from "react";
import Counter from "./components/Counter";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";
import "./App.css";



function App() {
  // Sets state for the active component
  const [activeComponent, setActiveComponent] = useState("counter");

  return (
    <div className="App">
      {/* App header that contains the buttons that switch between components */}
      <div className="App-header">
        <h1>Performance Assessment 3.4</h1>
        <h3>Task Menu</h3>
        <button onClick={() => setActiveComponent("counter")}>
          Task 1 - Counter
        </button>
        <button onClick={() => setActiveComponent("form")}>
          Task 2 - Form Input
        </button>
        <button onClick={() => setActiveComponent("todo")}>
          Task 3 - Todo List
        </button>
      </div>
      {/* Renders the active component */}
      <div>
        {activeComponent === "counter" && <Counter />}
        {activeComponent === "form" && <FormInput />}
        {activeComponent === "todo" && <TodoList />}
      </div>
    </div>
  );
}

export default App;
