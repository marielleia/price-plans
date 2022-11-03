import React from 'react';
import '../../style/price.css';

export default function Price({ type, price }) {
  return (
    <div className='price'>
      <h4 className='type'>{type}</h4>
      <h1>{price}</h1>
      <h4 className='month'>per month</h4>
    </div>
  )
}