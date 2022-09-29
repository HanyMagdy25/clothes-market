import React, { useState } from "react";
import Card from "../../components/Card/Card";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";
import "./AllProducts.css";
import { products } from "../../utils/data";
export default function AllProducts() {
  const [upClothes, setUpClothes] = useState(true);
  const [downClothes, setDownClothes] = useState(false);
  const [shoes, setShoes] = useState(false);
  return (
    <div className="all-products">
      <div className="container-less">
        <div className="all-products-top">
          <div className="all-products-top-input-topbar">
            <input type="text" />
            <button>
              <BsSearch />
            </button>
          </div>
          <button className={"btn-filter active w-22"}>
            <span>ترتيب العرض</span>{" "}
            <span className="flex-center">
              <IoIosArrowDown />
            </span>
          </button>
          <button className={"btn-filter active w-22"}>
            <span>الفئة</span>{" "}
            <span className="flex-center">
              <IoIosArrowDown />
            </span>
          </button>
        </div>

        <div className="all-products-bottom">
          <div className="filter-div">
            <h2>تصنيف حسب</h2>
            <button
              className={!upClothes ? "btn-filter" : "btn-filter active"}
              onClick={() => setUpClothes(!upClothes)}
            >
              <span>ملابس علوية</span>{" "}
              <span className="flex-center">
                {upClothes ? <IoIosArrowDown /> : <IoIosArrowBack />}{" "}
              </span>
            </button>
            {upClothes && (
              <ul>
                <li>
                  <span>كاردن</span> <input type="checkbox" value="كاردن" />
                </li>
                <li>
                  <span>سويتر</span> <input type="checkbox" value="سويتر" />
                </li>
                <li>
                  <span>قمصان</span> <input type="checkbox" value="قمصان" />
                </li>
                <li>
                  <span>تيشيرت</span> <input type="checkbox" value="تيشيرت" />
                </li>
                <li>
                  <span>بدون أكمام</span>{" "}
                  <input type="checkbox" value="بدون أكمام" />
                </li>
              </ul>
            )}

            <button
              className={!downClothes ? "btn-filter" : "btn-filter active"}
              onClick={() => setDownClothes(!downClothes)}
            >
              <span>بناطيل</span>{" "}
              <span className="flex-center">
                {downClothes ? <IoIosArrowDown /> : <IoIosArrowBack />}{" "}
              </span>
            </button>
            {downClothes && (
              <ul>
                <li>
                  <span>بنطلون</span> <input type="checkbox" value="بنطلون" />
                </li>
                <li>
                  <span>سويتر</span> <input type="checkbox" value="سويتر" />
                </li>
              </ul>
            )}

            <button
              className={!downClothes ? "btn-filter" : "btn-filter active"}
              onClick={() => setShoes(!shoes)}
            >
              <span>أحذية</span>{" "}
              <span className="flex-center">
                {shoes ? <IoIosArrowDown /> : <IoIosArrowBack />}{" "}
              </span>
            </button>
            {shoes && (
              <ul>
                <li>
                  <span>بنطلون</span> <input type="checkbox" value="بنطلون" />
                </li>
                <li>
                  <span>سويتر</span> <input type="checkbox" value="سويتر" />
                </li>
              </ul>
            )}
          </div>

          {/* **************** left side********** */}
          <div className="all-products-bottom-cards">
            {products.map((item, index) => (
              <Card item={item} key={index} shape="three" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
