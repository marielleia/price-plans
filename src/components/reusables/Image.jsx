import React from 'react';

export default function Image({ imageUrl, name }) {
  return (
    <div className='image'>
      <img
        style={{ width: "200px", margin: "50px" }}
        src={imageUrl}
        alt={name}>
      </img>
    </div>
  )
}