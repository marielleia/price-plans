import React from 'react';

export default function Image({ imageUrl, name }) {
  return (
    <div className='image'>
      <img
        style={{ width: "180px", margin: "40px"}}
        src={imageUrl}
        alt={name}>
      </img>
    </div>
  )
}