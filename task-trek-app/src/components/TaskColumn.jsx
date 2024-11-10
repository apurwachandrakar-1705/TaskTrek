
import TaskCard from './TaskCard';
import './TaskColumn.css'
const TaskColumn = ({icon,heading,tasks,status,hanleDelete}) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
      
        <img src={icon} alt="" className="task_column_icon"  /> {heading}
      </h2>
    {tasks.map((task,index)=>task.status===status &&
  <TaskCard handleDelete={hanleDelete} key={index} title={task.task} tags={task.tags} index={index}></TaskCard>)}
    </section>
  );
};
export default TaskColumn;
