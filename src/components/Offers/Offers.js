import React from "react";
import { products } from "../../utils/data";
import Card from "../Card/Card";
import "./Offers.css";
export default function Offers() {
  return (
    <div className="offers">
      <div className="container-less">
        <h1>العروض</h1>
        <div className="all-cards">
          {products?.slice(0,4)?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
