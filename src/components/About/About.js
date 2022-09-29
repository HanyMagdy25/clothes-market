import React from "react";
import "./About.css";
import logo from "../../assets/images/logo.png";
import home1 from "../../assets/images/home-1.png";
import home2 from "../../assets/images/home-2.png";
import home3 from "../../assets/images/home-3.png";

const imagesAbout = [home3, home2, home1];
export default function About() {
  return (
    <section className="about">
      <div className="container-less">
        <div className="flex about-content">
          <img src={logo} alt="logo" />
          <p>
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
            هذاالنص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا
            كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد
          </p>
        </div>

        <div className="about-images">
          {imagesAbout.map((item, index) => (
            <div key={index}>
              <img  src={item} alt="about" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
