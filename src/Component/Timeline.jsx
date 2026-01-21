import React from "react";
import "./Timeline.css";
import Step1 from "../assets/step1.webp"
import Step2 from "../assets/step2.webp"


const timelineData = [
  {
    id: 1,
    title: "Discovery & Goal Setting",
    desc: "We begin by understanding your goals to lay the right foundation.",
    image: Step1,
    position: "right",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    desc: "We define technical and business requirements, choosing the optimal stack.",
    image: Step2,
    position: "left",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>

      {timelineData.map((item) => (
        <div
          key={item.id}
          className={`timeline-item ${item.position}`}
        >
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>

          <div className="timeline-circle">{item.id}</div>

          <div className="timeline-image">
            <img src={item.image} alt={item.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
