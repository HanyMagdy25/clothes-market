import React from "react";
import { Link } from "react-router-dom";
import { BsCalendar2Date, BsPhone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import paypal from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";
import apple from "../../assets/images/apple-pay.png";
import "./Confirmation.css";
export default function Confirmation() {
  return (
    <div className="confirm">
      <div className="container-less">
        <h2 className="confirm-title">تأكيد الطلب</h2>
        <div className="confirm-divs">
          <div className="first">
            <h2 className="font-sans">I</h2>
            {/* <div className="confirm-two-div__right"> */}
            <div className="confirm-two-div__right__top">
              <h4>بيانات الشحن</h4>
              <Link to="/profile">تغير بيانات الشحن</Link>
            </div>
            <div className="confirm-two-div__right__bottom">
              <div>
                <span>
                  <IoLocationOutline />
                </span>{" "}
                <p>منزل رقم 10 شارع خالد أبن الوليد حي العزيزيةالرياض</p>
              </div>
              <div>
                <span>
                  <BsPhone />
                </span>{" "}
                <p>+96605000000</p>
              </div>
              <div>
                <span>
                  <BsCalendar2Date />
                </span>{" "}
                <p>يصل خلال من 5 إلى 7 أيام عمل</p>
              </div>
            </div>
            {/* </div> */}
          </div>

          <div className="second">
            <h2 className="font-sans">II</h2>
            <div className="confirm-second-div">
              <h4>الإجمالي</h4>
              <h4 className="flex-center ">
                <span className="font-sans ml-3">190</span> ريال
              </h4>
            </div>
            <div className="confirm-second-div">
              <h4>الشحن</h4>
              <h4 className="flex-center ">
                <span className="font-sans ml-3">150</span> ريال
              </h4>
            </div>
            <div className="confirm-second-div">
              <h4>الضريبة</h4>
              <h4 className="flex-center ">
                <span className="font-sans ml-3">120</span> ريال
              </h4>
            </div>
          </div>

          <div className="third">
            <h2 className="font-sans">III</h2>
            <div className="confirm-third-div">
              <h4>الإجمالي</h4>
              <h4 className="flex-center ">
                <span className="font-sans ml-3">190</span> ريال
              </h4>
            </div>
            <div className="confirm-two-div__left__agree">
              <input type="checkbox" />
              <span>
                أوافق على شروط الخدمة و ألتزم بها <Link to="/">قراءة</Link>
              </span>
            </div>
            <button>إتمام الطلب</button>
            <div className="visa-card">
                <img src={paypal} alt="paypal" />
                <img src={apple} alt="paypal" />
                <img src={visa} alt="paypal" />
                <img src={paypal} alt="paypal" />
                <img src={apple} alt="paypal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
