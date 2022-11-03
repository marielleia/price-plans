import React from 'react';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import Detail from '../reusables/Detail';
import Button from '../reusables/Button';
import '../../style/card.css';
import '../../style/button.css';
import people from '../assets/images/people.svg';

export default function Card3() {
    return (
        <div className='card'
            style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }}>
            <Image imageUrl={people} />
            <Price type={"Teams"} price={"$99"} />
            <Detail />
            <Button
                className='button3'
                buttonText={'Get Teams'} />
        </div>
    )
}