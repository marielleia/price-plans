import React from 'react';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import Detail from '../reusables/Detail';
import Button from '../reusables/Button';
import '../../styles/card.css';
import '../../styles/button.css';
import mindful from '../assets/icons/mindful.svg';

export default function Card1() {
  return (
    <div className='card' id='card1'
      style={{ backgroundColor: 'white', color: 'black' }}>
      <Image imageUrl={mindful} />
      <Price type={'Starter'} price={'Free'} />
      <Detail />
      <Button
        buttonText={'Get Started'} />
    </div>
  )
}