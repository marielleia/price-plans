import React from 'react';
import '../../style/button.css';

export default function Button({ buttonText }) {
  return (
    <button
      className='button'
      style={{
        width: '300px', height: '50px', borderRadius: '8px', fontSize: 'medium', fontWeight: 'bolder'
      }}>
      {buttonText}
    </button>
  )
}