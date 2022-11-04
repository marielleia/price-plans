import React from 'react';
import '../../styles/detail.css';

export default function Detail({disable}) {
    return (
        <div className='detail'>
            <ul>
                <li className='d1'>Full courses library</li>
                <li className='d2'>A new daily meditation</li>
                <li className='d3'>Access to the meditation guru</li>
                <li className='d4'>Sleep podcasts and exercises</li>
                <li className='d5'>Mindfulness exercises</li>
                <li className='d6'>Guided meditations</li>
                <li className='d7'>Cooking recipes</li>
            </ul>
        </div>
    )
}