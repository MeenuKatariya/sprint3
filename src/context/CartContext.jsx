import React from "react";

import axios from "axios"

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
 const [cart,setCart]=React.useState([])
  
 const getCartdata=async()=>{
   let res=await fetch(`http://localhost:8080/cartItems`)
   let data=await res.json()
   setCart(data)
  
  
//   axios({
//     method:"get",
//     url:"http://localhost:8080/cartItems"
//   }).then(res=>{
//     setCart(res.data)
//   })
 }

 const handeAdd=(id)=>{
    const items=cart.find((el)=>el.productId==id)
    console.log(items,"items")
    if(items==undefined)
    {
      axios({
        method:"post",
        url:"http://localhost:8080/cartItems",
        data:{
            count:1,
            productId:id,
            id
        }
      }).then(res=>{
        console.log(res,"handlecart")
        fetch()

      })

    }
  }
    // else
    // {
    //   axios({
    //     method:"patch",
    //     url:`http://localhost:8080/cartItems/id`,
    //     data:{
    //         count:items.count+1,
           
    //     }
    //   }).then(res=>{
    //     console.log(res,"handlecart")
    //     fetch()

    //   })

    // }
 
 const handleIncrement =(id)=>{
  const items=cart.find((el)=>el.productId==id)
  console.log(items,"increase")
  axios({
    method:"patch",
    url:`http://localhost:8080/cartItems/${id}`,
    data:{
        count:items.count+1,
       
    }
  }).then(res=>{
    console.log(res,"handlecart")
    fetch()

  })

}
 
 const handleDecrement=(id)=>{
  const items=cart.find((el)=>el.productId==id)
  if(items.count==1)
  {
    axios({
      method:"delete",
      url:`http://localhost:8080/cartItems/${id}`,
     
    }).then(res=>{
      console.log(res,"handlecart")
      fetch()
  
    })
  }else{
  axios({
    method:"patch",
    url:`http://localhost:8080/cartItems/${id}`,
    data:{
        count:items.count-1,
       
    }
  }).then(res=>{
    console.log(res,"handlecart")
    fetch()

  })
  }
}

 
 const handleRemvoe=(id)=>{
  axios({
    method:"delete",
    url:`http://localhost:8080/cartItems/${id}`,
   
  }).then(res=>{
    console.log(res,"handlecart")
    fetch()

  })
  }
 

 const value={
  cart,handeAdd,handleDecrement,handleRemvoe,handleIncrement
 }




  React.useEffect(()=>{
    getCartdata()
  },[])



 

 
  return <CartContext.Provider value={value} >{children}</CartContext.Provider>;
};