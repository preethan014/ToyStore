import React from 'react'

const EachItem = (props) => {
const {itemid,img_url,item_name,price}=props


  return (
    <>
    <li className='each-ctg-item-outer' key={itemid}>
        <div className='img-item-outer'><img
        className='item-img' src={img_url} alt={`${item_name}`}/></div>
        <div className='item-name'>{item_name}</div>
        <div className='item-btn-outer'><button
        className='item-price-btn' type='button'>{price} INR</button></div>
      
    </li>
    </>
  )
}

export default EachItem
