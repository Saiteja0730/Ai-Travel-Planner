import React, { useEffect, useState } from "react";
import "./budget.css";

const Budget = ({ onBudgetSelect }) => {
  const [selected, setSelected] = useState(null);


  const features = [
    {
      id: 1,
      image: "https://cdn-icons-png.flaticon.com/512/7630/7630510.png",
      title: "cheap",
      desc: "Any conscious of costs",
    },
    {
      id: 2,
      image: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png",
      title: "Moderate",
      desc: "Keep cost on the average side",
    },
    {
      id: 3,
      image: "https://cdn-icons-png.flaticon.com/512/10384/10384161.png",
      title: "Luxury",
      desc: "Don't worry about cost",
    },
  ];

  const handleClick = (title) => {
    setSelected(title);
    onBudgetSelect("Budget", title);
  };

  return (
    <>
      <div className="budget-container">
        {features.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.title)}
            className={`budtravel-card ${
              selected === item.title ? "selected" : ""
            }`}
          >
            <div className="budget-img">
              <img src={item.image} />{" "}
            </div>
            <h4 className="budget-title">{item.title}</h4>
            <p className="budget-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Budget;
