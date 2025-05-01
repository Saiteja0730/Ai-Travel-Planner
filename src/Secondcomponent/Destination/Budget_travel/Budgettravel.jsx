import React, { useEffect, useState } from "react";
import "./Budgettravel.css";

const Budgettravel = ({ onBudgetTravel }) => {
  const [selected, setSelected] = useState(null);

  const feature = [
    {
      id: 1,
      image:
        "data:image/png;base64,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",
      title: "Solo",
      desc: "A Solo travelers in Exploration",
      people: "1",
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdJdl2Fk9x7ricdnx-FpZnAq36XuhZuaRyg&s",
      title: "A Couple",
      desc: "Two traveles in tandem",
      people: "2 people",
    },
    {
      id: 3,
      image:
        "https://cdn-icons-png.freepik.com/256/10516/10516510.png?semt=ais_hybrid",
      title: "Family",
      desc: "A group of fun Loving Adventure",
      people: "4 to 5 people",
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JNEUFkqx5pQQ0ZiVgsBEHR9I0NaGGqYR4g&s",
      title: "Friends",
      desc: "Live in the moments",
      people: "6 to 8 people",
    },
  ];

  const handleClick = (title) => {
    setSelected(title);
    onBudgetTravel("Traveller", title);
  };

  return (
    <>
      <div className="budtravel-container">
        {feature.map((item) => (
          <div
            key={item.id}
            onClick={() => handleClick(item.title)}
            className={`budtravel-card ${
              selected === item.title ? "selected" : ""
            }`}
          >
            <div className="buttravel-img">
              <img src={item.image} />{" "}
            </div>
            <h4 className="budtravel-title">{item.title}</h4>
            <p className="budtravel-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Budgettravel;
