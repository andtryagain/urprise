import React from 'react';

import './content.css';

const Content = (props) => {
    return (
        <div className='content ps-4 pe-4 pt-4 pb-4'>
            { props.children }
        </div>
    );
};

export default Content;