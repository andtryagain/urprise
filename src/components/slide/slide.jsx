import React from 'react';

const Slide = ({ index, slide }) => {
    const isItemActive = index === 0 ? ' active' : '';
    return <div className={'carousel-item' + isItemActive}>
        <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="slide" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#FFF"></rect></svg>
        <div className="carousel-caption d-none d-md-block top-50 start-50 translate-middle">
            <h1>{slide.emoji}</h1>
            <h3>{slide.header}</h3>
            <p>{slide.description}</p>
        </div>
    </div>
};

export default Slide;
