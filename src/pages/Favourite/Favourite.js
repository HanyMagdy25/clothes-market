import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import emptyFav from "../../assets/images/emptyFav.png";
import "./Favourite.css"
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

export default function Favourite() {
    const { favourite } = useContext(GlobalContext);
  console.log(favourite.length);
  return (
    <div className="favourite">
      <div className="favourite-container">
        <h2>المفضلة</h2>
        <p>"يمكنك الأحتفاظ بالعناصر المفضله لك هنا"</p>
        {favourite.length > 0 ? (
          <div className="cards-favourite">
            {favourite.map((item, index) => (
              <Card key={index} item={item} type="favourite" />
            ))}
          </div>
        ) : (
          <div className="favourite-empty">
            <img src={emptyFav} alt="empty"/>
            <h3>المفضلة فارغة</h3>
            <Link to="/">
            قم بالتسوق لإضافة منتجات
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
