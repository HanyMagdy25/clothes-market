import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { products } from "../../utils/data";
import { BsDash } from "react-icons/bs";
import { AiOutlineHeart, AiOutlinePlus, AiTwotoneHeart } from "react-icons/ai";
import "./Product.css";
import CardImage from "../../components/CardImage/CardImage";
export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [count, setCount] = useState(1);
  const param = useParams();
  const oneProduct = products.find((a) => a.id === param.id);
  const {
    addProductToFavourite,
    removeProductFromFavourite,
    addProductToCart,
    removeProductFromCart,
    cart,
    favourite,
  } = useContext(GlobalContext);

  let storedFavourite = favourite.find((o) => o.id === oneProduct.id);
  const allStoredFavourite = storedFavourite ? true : false;
  let storedCart = cart.find((o) => o.id === oneProduct.id);
  const allStoredCart = storedCart ? true : false;

  return (
    <div className="product-section">
      <div className="container-less product-section-container">
        <div className="section-container-top">
          <div className="product-img">
            <div className="one-image-big">
              <img
                src={oneProduct?.image[selectedImage]}
                alt={oneProduct.title}
              />
            </div>
            <div className="five-images-div">
              {oneProduct.image?.slice(0, 5)?.map((i, index) => (
                <img
                  key={index}
                  src={i}
                  alt={oneProduct.title}
                  className={index === selectedImage ? "some-blur" : ""}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
          <div className="product-details">
            <div className="product-details-top">
              <div className="product-title-top">
                <h3 className="product-title">{oneProduct.title}</h3>
              </div>
              {allStoredFavourite ? (
                <span
                  onClick={() => removeProductFromFavourite(oneProduct.id)}
                  className="product-favourite fav"
                >
                  <AiTwotoneHeart />
                </span>
              ) : (
                <span
                  onClick={() => addProductToFavourite(oneProduct)}
                  className="product-favourite"
                >
                  <AiOutlineHeart />
                </span>
              )}
            </div>

            {/* <h3>??????????</h3> */}
            <h2 className="product-price">
              {" "}
              <span>{oneProduct.price}</span> ????????
            </h2>
            <p>{oneProduct.description}</p>

            <div className="product-quantity-div">
              <div className="qty-div">
                <h3>????????????</h3>
                <div className="product-quantity-div-inside-green">
                  <button className="plus" onClick={() => setCount(count + 1)}>
                    <AiOutlinePlus />
                  </button>
                  <span>{count}</span>
                  <button
                    className="minus"
                    disabled={count < 2}
                    onClick={() => setCount(count - 1)}
                  >
                    <BsDash />
                  </button>
                </div>
              </div>
              <div className="qty-div">
                <h3>????????????</h3>
                <div className="product-quantity-div-inside-size">
                  <button className="size">XL</button>
                  <button className="size">L</button>
                  {/* <span>{count}</span> */}
                  <button className="size">M</button>
                  <button className="size">S</button>
                </div>
              </div>

              <div className="product-quantity-div-inside">
                {allStoredCart ? (
                  <button
                    onClick={() => removeProductFromCart(oneProduct.id)}
                    className="product-btn remove"
                  >
                    ?????? ???? ??????????
                  </button>
                ) : (
                  <button
                    onClick={() => addProductToCart(oneProduct)}
                    className="product-btn"
                  >
                    ?????????? ???????? ????????????
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*----- description ------ */}
        <div className="product-description">
          <h3>??????????</h3>
          <p>
            ?????? ???????? ???? ???????? ?????? ???????? ???? ???????????? ???? ?????? ???????????????? ?????? ???? ?????????? ??????
            ???????? ???? ???????? ???????? ?????????????? ?????? ?????????? ???? ???????? ?????? ?????? ???????? ???? ????????????
            ???? ???????????? ???????????? ?????????? ?????? ?????????? ?????? ???????????? ???????? ???????????? ??????????????. ????
            ?????? ?????????? ?????? ?????? ???????? ???? ?????????????? ???????? ???? ???????? ???????? ???????????? ?????????? ??????
            ?????????????? ?????? ?????????? ???????? ???? ???????? ?????????? ?????? ???????? ?????????? ???????????? ???????? ????????
            ???????????? ???????? ???????????? ?????????????? ?????? ?????? ?????????????? ?????? ?????????? ???????????? ???? ????????
            ???? ?????????????? ???? ???????? ?????? ???????? ???????????? ???????????? ????????????.
          </p>
        </div>

        <div className="section-container-bottom">
          <h2>???? ?????????? ????????</h2>
          <div className="section-container-bottom-cards">
            {/* {products?.slice(0, 4)?.map((item, index) => (
              <CardLg key={index} item={item} />
            ))} */}
            {products?.slice(0, 4)?.map((item, index) => (
              <CardImage item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
