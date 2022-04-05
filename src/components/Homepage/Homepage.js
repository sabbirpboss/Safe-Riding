import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import Review from "../Review/Review";
import Reviews from "../Reviews/Reviews";
import "./Homepage.css";

const Homepage = () => {
  const [reviews, setReviews] = useState([]);
  useEffect( () => {
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data));
}, [])
  return (
    <div>
      <div className="banner-container">
        <div className="banner-details">
          <h1 className="banner-title">Royal enfield meteor</h1>
          <h1 className="custom-color">The king of the roads</h1>
          <p>
            The Royal Enfield Meteor 350 cruiser motorcycle was unveiled by
            Royal Enfield as a replacement for the Thunderbird 350 worldwide.
          </p>
          <button className="banner-btn">See More</button>
        </div>
        <div className="banner-img">
          <img src={banner} alt="" />
        </div>
      </div>

      <div className="reviews-title">
        <h2>Customer Review's(3)</h2>
        <div className="reviews-container">
          {
            reviews.slice(0, 3).map(review => <Review 
              key={review.id}
              review={review}
            ></Review>)
          }
        </div>
      </div>

      <div className="see-all-reviews-btn">
          <Link to="/reviews">See All Reviews</Link>
        </div>
    </div>
  );
};

export default Homepage;
