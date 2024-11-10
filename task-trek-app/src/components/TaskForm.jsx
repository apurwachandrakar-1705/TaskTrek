import { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";
const TaskForm = ({setTasks}) => {
  const[taskData,setTaskdata]= useState({
    task:"",
    status:"todo",
    tags:[]
  })
  const checkTag = (tag)=>{
    return taskData.tags.some(item=>item ===tag)
  }
  const selectTag =(tag)=>{
if(taskData.tags.some(item=>item===tag))
{
  const filteredTags= taskData.tags.filter(item=>item !==tag)
  setTaskdata(prev=>{
    return{...prev,tags:filteredTags} 
  })
} else{
  setTaskdata(prev=>{
    return{...prev,tags:[...prev.tags,tag]}
  })
}
  }

  const handleChange =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    
    setTaskdata(prev=>{
      return {...prev,[name]:value}
    })

  }
 const handleSubmit = (e)=>{
  e.preventDefault()

setTasks(prev=>{
  return [...prev,taskData]
  })
  setTaskdata({
    task:"",
    status:"todo",
    tags:[]
  })

 }
//    const[task,setTask]=useState("");
//    const[status,setStatus]=useState("")
//    const handleNewTask =(event)=>{
// setTask(event.target.value)
//    }
//    const handleStatusChange =(event)=>{
//     setStatus(event.target.value)
//    }
//    console.log(task,status);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Your Task"
          value={taskData.task}
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
           <Tag tagName="Html" selectTag={selectTag} selected={checkTag("Html")} ></Tag>
           <Tag tagName="Css" selectTag={selectTag}  selected={checkTag("Css")} ></Tag>
           <Tag tagName="Js" selectTag={selectTag}  selected={checkTag("Js")} ></Tag>
           <Tag tagName="React"selectTag={selectTag}  selected={checkTag("React")} ></Tag>

          </div>
          <div>
            <select value={taskData.status} name="status" className="task_status"onChange={handleChange} >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button className="task_submit">+ Add Task</button>
        </div>
      </form>
    </header>
  );
};
export default TaskForm;
