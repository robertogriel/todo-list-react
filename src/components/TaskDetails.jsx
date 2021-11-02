import React from 'react';
import { useParams } from 'react-router';
import Button from './Button';
import './TaskDetails.css';

import { useHistory } from 'react-router-dom';

const TaskDetails = () => {

    const params = useParams();

    const history = useHistory();

    const handleBackButtonClick = ()=>{
        history.goBack();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis impedit, asperiores minus obcaecati praesentium ex.</p>
            </div>
        </>
     );
}
 
export default TaskDetails;