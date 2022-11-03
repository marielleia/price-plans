import React from 'react';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import Detail from '../reusables/Detail';
import Button from '../reusables/Button';
import '../../styles/card.css';
import '../../styles/button.css';
import two from '../assets/icons/two.svg';

export default function Card2() {
  return (
    <div className='card'
      style={{ backgroundColor: "rgb(102, 18, 211)", color: "white" }}>
      <Image imageUrl={two} />
      <Price type={"Pro"} price={"$49"} />
      <Detail />
      <Button
        className='button2'
        style={{ backgroundColor: '#6612d3', color: 'white', borderColor: 'white' }}
        buttonText={"Become a Pro"} />
    </div>
  )
}