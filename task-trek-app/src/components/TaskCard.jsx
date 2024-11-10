import './TaskCard.css'
import Delete from '../assets/delete.png'
import Tag from './Tag'
const TaskCard =({title,tags,index,handleDelete})=>{
return(
    <article className='task_card' >
       <p className="task_text">{title}</p>
       <div className="task_card_bottom_line">
        <div className="task_card_tags">
            {
             tags.map((tag,index)=>(
                <Tag key={index} tagName={tag} selected={true}></Tag>
             ))   
            }

        </div>
        <div className="task_delete">
            <img onClick={()=>handleDelete(index)} src={Delete} alt=""  className='delete_icon'/>
        </div>

       </div>
    </article>
)
}
export default TaskCard