import React from "react";
import ProductItem from "./ProductItem";
// import axios from "axios"
const Products = () => {
  const [store,setStore]=React.useState([])
 
  const fetchData=async()=>{
    let result= await fetch(`http://localhost:8080/products`)
    let response=await result.json()
    setStore(response)
    // console.log(response)
   }
   React.useEffect(()=>{
     fetchData()
   },[])
  
 
  
 
 
 return <div>
  {
   store.map((items)=>{
    return(
      <ProductItem  {...items}  />
    )

  
   })
  }
 
</div>;
};

export default Products;