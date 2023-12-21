import React, { useEffect, useState } from 'react'

const Products = () => {
    const [products, setProducts]=useState([])


    
useEffect(()=>{
  
})

  fetch(`data/products.json`)
  .then(res=>res.json())
  .then(data=>{setProducts(data)
console.log(products)
setProducts(data)})

  return (
    <div>
        {products.map((product)=>{
            return(
                <li>
                    <h3>{products.name}</h3>
                    <p>{product.price}</p>
                </li>
            )
        })}
    </div>
  )
}

export default Products