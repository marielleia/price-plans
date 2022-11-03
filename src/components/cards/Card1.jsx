import React from 'react';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import Detail from '../reusables/Detail';
import Button from '../reusables/Button';
import '../../style/card.css';
import '../../style/button.css';
import mindful from '../assets/images/mindful.svg';

export default function Card1() {
  return (
    <div className='card'
      style={{ backgroundColor: 'white', color: 'black' }}>
      <Image imageUrl={mindful} />
      <Price type={"Starter"} price={"Free"} />
      <Detail />
      <Button
        className='button1'
        style={{ backgroundColor: 'white', color: 'black', borderColor: '#6612d3' }}
        buttonText={"Get Started"} />
    </div>
  )
}