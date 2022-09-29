import React from 'react'
import "./Header.css"
import headerImage from "./../../assets/images/header.png"
export default function HeaderSwiper() {
  return (
    <div className='headerSwiper'>
        <img src={headerImage} alt="header" />
        <div>
          <h1>عروض خاصه</h1>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة</p>
        </div>
    </div>
  )
}