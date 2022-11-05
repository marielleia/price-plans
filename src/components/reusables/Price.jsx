import React from 'react';
import '../../styles/price.css';

export default function Price({ type, price }) {
  return (
    <div className='price-box'>
      <h4 className='type'>{type}</h4>
      <h1 className='price'>{price}</h1>
      <h4 className='month'>per month</h4>
    </div>
  )
}