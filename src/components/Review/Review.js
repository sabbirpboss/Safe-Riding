import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {name, img, title, ratings} = review;
    return (
            <div className='review-card'>
                <div className="review-img">
                    <img src={img} alt={name} /> 
                </div>
                <h3 className='review-title'>{name}</h3>
                <p className='ratings'>Ratings: <span className='custom-color'>{ratings}</span> out of 5.0</p>
                <p className='review-comment'><span className='review-custom-color'>Review:</span> {title}</p>
            </div>
    );
};

export default Review;