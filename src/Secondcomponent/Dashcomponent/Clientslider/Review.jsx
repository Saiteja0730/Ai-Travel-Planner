import React from "react";
import "./review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const Review = () => {
  const reviews = [
    {
      name: "John Doe",
      title: "Marketing Manager",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      review:
        "This service completely exceeded my expectations. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Product Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
      review: "I really loved the user experience and support. Will use again!",
    },
    {
      name: "Alice Brown",
      title: "Startup Founder",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 4.5,
      review: "A very smooth and helpful experience. Excellent team behind it.",
    },
    {
      name: "Michael Lee",
      title: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      rating: 4,
      review: "Great features and easy to use. Some small improvements needed.",
    },
    {
      name: "Sophia Williams",
      title: "UX Researcher",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      rating: 5,
      review: "Absolutely loved it! The results were better than expected.",
    },
  ];

  return (
    <div className="review-container">
      <div className="review-info">
        <h2>What our Customers are saying?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="rating">
          <span>4.8 Overall rating</span>
          <div className="stars">★★★★★</div>
        </div>
      </div>

      <div className="review-swiper">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="reviewcard">
                <img src={item.image} alt={item.name} className="user-img" />
                <h3>{item.name}</h3>
                <p className="title">{item.title}</p>
                <p className="review-text">"{item.review}"</p>
                <p className="stars">
                  {"★".repeat(Math.floor(item.rating)) +
                    (item.rating % 1 !== 0 ? "½" : "")}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
