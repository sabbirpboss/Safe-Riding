import React from 'react';
import useReviews from '../../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReviews([]);

    return (
        <div className='reviews'>
            <h2>What our customer's say!</h2>
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