import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png"
import Done from "./assets/check-mark-button.png"
const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);
function App() {
  const [tasks,setTasks]=useState(JSON.parse(oldTasks)||[]);
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])
 
  const handleDelete = (taskIndex)=>{
   const newTask= tasks.filter((task,index)=>index!==taskIndex)
   setTasks(newTask);
  }
return (
  <div className='app'>
    <TaskForm setTasks={setTasks}></TaskForm>
    <main className='app_main' >
      <TaskColumn hanleDelete={handleDelete} icon={Todo} heading="To do" tasks={tasks} status="todo" ></TaskColumn>
      <TaskColumn hanleDelete={handleDelete} icon={Doing} heading = "Doing" tasks={tasks} status="Doing"  ></TaskColumn>
      <TaskColumn hanleDelete={handleDelete} icon={Done} heading = "Done" tasks={tasks} status="Done"  ></TaskColumn>

    

    </main>
  </div>
)
}

export default App
