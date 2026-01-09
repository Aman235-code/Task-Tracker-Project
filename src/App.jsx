import React,{ useState } from "react";

function App() {
  // Store the task input value
  const [task, setTask] = useState("");

  // Store all tasks
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-center mb-4">
          Task Tracker
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            className="flex-1 border rounded px-3 py-2"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span
                className={
                  task.completed
                    ? "line-through text-gray-500"
                    : ""
                }
              >
                {task.text}
              </span>

              <button
                onClick={() => toggleTask(task.id)}
                className={
                  task.completed
                    ? "text-green-600 font-medium"
                    : "text-orange-600 font-medium"
                }
              >
                {task.completed ? "Completed" : "Pending"}
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No tasks added yet
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
