import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data));
    }, [])
    return (
        <div className='reviews'>
            <h2>Customer Review's(3)</h2>
            <div className='reviews-container'>
                {
                    reviews.map(review => <Review 
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;