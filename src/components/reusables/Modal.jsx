import React from 'react';
import '../../styles/modal.css';

export default function Modal({ setOpenModal }) {

  return (
    <div className='modal'>
      <div className="modal-content">
        <h2>Thank you for your interest!</h2>
        <p> Enter your email below and we will contact you soon for more information.</p>
        <div className='email-box'>
          <input type="email"
            name="email"
            id="email"
            required>
          </input>
          <label>Email</label>
        </div>
        <button type='submit' className='submit'>
          Submit
        </button>
      </div>
      <div className='overlay'>
        <button className='close-modal'
          onClick={() => { setOpenModal(false) }}>
          X
        </button>
      </div>
    </div>
  )
};