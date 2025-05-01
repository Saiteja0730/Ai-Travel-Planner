import React from "react";
import { Star } from "lucide-react";
import "./package.css";

const Packageimg = () => {
  const packages = [
    {
      id: 1,
      title: "City of Greece",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.5,
      reviews: "2.5k Reviews",
      price: "$899",
    },
    {
      id: 2,
      title: "Dream for Couples",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.7,
      reviews: "2.5k Reviews",
      price: "$799",
    },
    {
      id: 3,
      title: "Visit Bhutan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.pexels.com/photos/910368/pexels-photo-910368.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.3,
      reviews: "2.5k Reviews",
      price: "$999",
    },
    {
      id: 4,
      title: "City Of Paris",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image:
        "https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4.6,
      reviews: "2.5k Reviews",
      price: "$699",
    },
  ];

  return (
    <div className="travel-container">
      <div className="travel-header">
        <h2>Popular Packages</h2>
        <p>Checkout our packages</p>
      </div>

      <div className="travel-grid">
        {packages.map((pkg) => (
          <div key={pkg.id} className="travel-card">
            <img src={pkg.image} alt={pkg.title} />
            <div className="travel-card-body">
              <h3 className="travel-card-title">{pkg.title}</h3>
              <p className="travel-card-description">{pkg.description}</p>
              <div className="travel-info">
                <div className="travel-rating">
                  <Star className="star-icon" fill="currentColor" />
                    <span className="rating-value">{pkg.rating}</span>
                    <span className="travel-reviews">({pkg.reviews})</span>
                    <span className="travel-price">{pkg.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packageimg;
