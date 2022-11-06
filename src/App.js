import axios from 'axios';
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    getTasks()
  }, [])

  async function getTasks() {
    const tasks = await axios.get('https://jsonplaceholder.typicode.com/todos')
    setTasks(tasks.data)
  }

  function renderTasks() {
    return tasks.map(task => <div>{task.title}</div>)
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div>
        {renderTasks()}
      </div>
    </div>
  );
}

export default App;
