import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/tasks").then(res => setTasks(res.data));
  }, []);

  const addTask = async () => {
    const res = await api.post("/tasks", { title });
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>

      <div className="flex mb-4">
        <input
          className="border p-2 flex-1"
          placeholder="New task"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-black text-white px-4"
        >
          Add
        </button>
      </div>

      <input
        className="border p-2 w-full mb-4"
        placeholder="Search tasks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {tasks.filter(task => 
          task.title.toLowerCase().includes(search.toLowerCase())
        ).map(task => (
          <li
            key={task._id}
            className="border p-2 mb-2 flex justify-between items-center"
          >
            <span
              className={task.completed ? "line-through text-gray-400" : ""}
            >
              {task.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={async () => {
                  const res = await api.put(`/tasks/${task._id}`, {
                    completed: !task.completed
                  });
                  setTasks(tasks.map(t => t._id === task._id ? res.data : t));
                }}
                className="text-sm text-blue-600"
              >
                {task.completed ? "Undo" : "Done"}
              </button>
              <button
                onClick={async () => {
                  await api.delete(`/tasks/${task._id}`);
                  setTasks(tasks.filter(t => t._id !== task._id));
                }}
                className="text-sm text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}