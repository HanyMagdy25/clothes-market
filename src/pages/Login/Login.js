import React from "react";
// import "./Login.css";
import loginImage from "../../assets/images/signup.png";
import googleLogo from "../../assets/images/gg.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="login-right">
        <h2>قم بإنشاء حسابك الآن</h2>
        <div className="all-inputs-sign">
          {/* <input type="text" placeholder="الأسم الأول" />
          <input type="text" placeholder="الأسم الأخير" /> */}
          <input type="email" placeholder="بريدك الإلكتروني" />
          <input type="password" placeholder="كلمة السر" />
        </div>
        <div className="remember">
          <div>
            <input type="checkbox" />
            <span> تذكرنى </span>
          </div>
          <div>
            <Link to="/">نسيت كلمة السر؟</Link>
          </div>
        </div>
        <button>تسجيل الدخول</button>
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
