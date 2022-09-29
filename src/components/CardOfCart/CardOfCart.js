import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext';
import "./CardOfCart.css"
import { AiOutlinePlus,AiOutlineClose } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
export default function CardOfCart({item}) {
    const [count, setCount] = useState(item?.qty);
  const {changeProductQty ,removeProductFromCart} = useContext(GlobalContext);
  return (
    <div className="CardOfCart">
      <span className="close-cart flex-center" onClick={()=>removeProductFromCart(item.id)}>
        <AiOutlineClose />
      </span>
      <img src={item?.image[0]} alt={item.title} />

      <div className="CardOfCart-details">
        <div className="CardOfCart-top">
          <h3>{item.title}</h3>
        </div>

        <div className='size-cart'>
            <h3>المقاس</h3>
            <span className='flex-center'>L</span>
        </div>
        <div className='size-cart'>
            <h3>اللون</h3>
            <span className='color-cart'></span>
        </div>

        <div className="CardOfCart-bottom">
          <div className="cart-quantity-div">
            {/* <span>الكمية</span> */}
            <div className="qty-div-cart">
              <button className="plus" onClick={() => {setCount(count + 1);changeProductQty(item,count+1)}}>
                <AiOutlinePlus />
              </button>
              <span>{count}</span>
              <button
                className="minus"
                // disabled={count < 2}
                onClick={() => {setCount(count - 1);changeProductQty(item,count-1)}}
              >
                <BsDash />
              </button>
            </div>
          </div>
          <div className="cart-bootom-price"><h3><span> {item.price * count}</span> ريال</h3></div>
        </div>
      </div>
    </div>
  )
}
