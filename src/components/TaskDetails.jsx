import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';
import './TaskDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return ( 
        <>
            <div className='back-button-container' onClick={handleBackButtonClick}>
                <Button>Voltar</Button>
            </div>
            <div className='task-detail-container'>
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reprehenderit quas quae ut est numquam laborum in impedit mollitia voluptatibus laboriosam quia odio, perferendis sint eos quos quaerat ullam sequi?</p>
            </div>
        </>
     );
}
 
export default TaskDetails;