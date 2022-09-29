import React from "react";
import { about } from "../../utils/data";
import "./Services.css";
export default function Services() {
  return (
    <div className="services">
      <div className="container-less">
        <div className="all-services">
          {about.map((item, index) => (
            <div key={index} className="services-one">
              <h2>{item.num}</h2>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
