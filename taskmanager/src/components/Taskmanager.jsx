import { useState } from "react";
import "./taskmanager.css";

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [input, setInput] = useState("");

  function addTask() {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="New task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask();
          }
        }}
      />

      <button onClick={addTask}>Add</button>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      {tasks.length === 0 ? (
        <p>Add your first task above</p>
      ) : (
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id}>
             <span
  onClick={() => toggleTask(task.id)}
  className={task.completed ? "completed" : ""}
>
  {task.text}
</span>

              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>
        {tasks.filter((task) => !task.completed).length} tasks remaining
      </p>
    </div>
  );
}

export default TaskManager;