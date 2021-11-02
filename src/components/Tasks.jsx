import React from 'react';
import TaskItem from './TaskItem'



const Tasks = ({tasks, handleTaskClick, hadleTaskDeletion})=>{

    return (

        <>
            {tasks.map(task => <TaskItem
                key={task.id}
                task={task}
                handleTaskClick={handleTaskClick}
                hadleTaskDeletion={hadleTaskDeletion}
            />)}
        </>
    );
}

export default Tasks;