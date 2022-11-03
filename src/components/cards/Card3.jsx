import React from 'react';
import Image from '../reusables/Image';
import Price from '../reusables/Price';
import Detail from '../reusables/Detail';
import Button from '../reusables/Button';
import '../../styles/card.css';
import '../../styles/button.css';
import people from '../assets/icons/people.svg';

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