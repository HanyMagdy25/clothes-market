import React from "react";
import "./Signup.css";
import loginImage from "../../assets/images/login.png";
import googleLogo from "../../assets/images/gg.png";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="login">
      <div className="login-right">
        <h2>قم بإنشاء حسابك الآن</h2>
        <div className="all-inputs">
          <input type="text" placeholder="الأسم الأول" />
          <input type="text" placeholder="الأسم الأخير" />
          <input type="email" placeholder="بريدك الإلكتروني" />
          <input type="password" placeholder="كلمة السر" />
        </div>
        <button>إنشاء الحساب</button>
        <div className="or flex-center">أو</div>

        <button className="sign-btn-google flex-center">
          قم بإنشاء حسابك عن طريق <img src={googleLogo} alt="google" />
        </button>
        <div className="agree">
          <p>
            عند تسجيل حسابك فأنك توافق على
            <span> شروط الأستخدام و سياسة الخصوصية </span>
          </p>
        </div>
        <div className="already-have">
          <p>لديك حساب بالفعل؟</p>
          <Link to="/login">قم بتسجيل الدخول</Link>
        </div>
      </div>

      <div className="login-left">
        <img src={loginImage} alt="login" />
      </div>
    </div>
  );
}
