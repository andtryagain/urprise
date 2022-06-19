import { useState } from 'react';
import Form from '../form';

import './button-to-form.css';

const ButtonToForm = ({ editType, editList }) => {
    const [ isVisible, setVisibility ] = useState(false)

    const onClick = () => {
        setVisibility(!isVisible)
    }

    const onFormClose = () => {
        setVisibility(!isVisible);
    }

    const newList = {
        id: (Math.random() + 1).toString(36).substring(2),
        title: '',
        items: [{id: 0}]
    }
    
    return !editType ?
        <>
            <button 
                className='btn btn-outline-success btn-new-list'
                onClick={ onClick }
            >
                +
            </button>
            {isVisible && <Form list={newList} onFormClose={onFormClose}/>}</>
        :
        <>
            <button className='btn btn-warning'
                onClick={ onClick }>
                <i className="fa-solid fa-pen"></i>
            </button>
            {isVisible && <Form edit list={editList} onFormClose={onFormClose}/>}
        </>
    
};

export default ButtonToForm;
