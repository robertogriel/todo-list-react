import React from 'react';
import './Task.css';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const TaskItem = ({task, handleTaskClick, hadleTaskDeletion})=>{

    const history = useHistory();

    const handleTaskDetailsClick = ()=>{
        history.push(`${task.title}`);
    }

    return (
    
    <>
    <div className="task-container" style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}>
        <div className="task-title" onClick={()=>handleTaskClick(task.id)}>{task.title}</div>
        <div className="buttons-container">
            <button onClick={()=>hadleTaskDeletion(task.id)} className="remove-task-button">
                <CgClose/>
            </button>
            <button className="see-task-details-button" onClick={handleTaskDetailsClick}>
                <CgInfo/>
            </button>
        </div>
    </div>
    </>
    );
}

export default TaskItem;