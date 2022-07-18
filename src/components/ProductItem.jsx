import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItem = ({name,description,id}) => {
  const {cart,handeAdd,handleIncrement,handleDecrement,handleRemvoe} =React.useContext(CartContext)

  let itemCountInCart = undefined;
  cart.forEach(item => {
    if(item.productId == id){
  itemCountInCart = item.count;
    }
  })
  return <div>
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="des">
          <h5>{description}</h5>
        </div>
        {
          itemCountInCart ? <div>{itemCountInCart}</div> : null
        }
     <button disabled={itemCountInCart? true : false} onClick={()=>{handeAdd(id)}}>Add To Cart</button>
      <button onClick={()=>{handleIncrement(id)}}>Increment</button>
     <button onClick={()=>{handleDecrement(id)}}>Decrement</button>
     <button onClick={()=>{handleRemvoe(id)}}>Remove</button> 

  </div>;
};

export default ProductItem;
