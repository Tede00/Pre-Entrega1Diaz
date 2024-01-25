import React from 'react'

export default function Product({img,title,price}) {
  return (
    <div>
      <img src={img} alt="img1" />
      <h1>{title}</h1>
      <p>${price}</p>
    </div>
  )
}
  