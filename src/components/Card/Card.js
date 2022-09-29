import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
export default function Card({ item,shape }) {
  return (
    <Link to={`/product/${item.id}`} className={shape ? "card-three" : "card"}  >
      <div className="flex-center percent">{item.sale}%</div>
      <img src={item?.image[0]} alt="card" />
      <div className="card-top">
        <h2>{item.title}</h2>
        <h2>{item.price} ريال</h2>
      </div>
      <div className="sale">
        <h2>{item.oldPrice} ريال</h2>
      </div>
    </Link>
  );
}
