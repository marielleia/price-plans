import React, { useState } from 'react';
import '../../styles/modal.css';

export default function Modal({ setOpenModal }) {

  const [value, setValue] = useState("");

  const handleChange = e => {
    setValue(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("Email sent. We will get in touch with you shortly!");
  }

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Thank you for your interest!</h2>
        <p> Enter your email below and we will contact you soon for more information.</p>
        <form className='email-box' autoComplete='off' value={value} onChange={handleChange}>
          <input type='email'
            name='email'
            id='email'
            required
          >
          </input>
          <label>Email</label>
        </form>
        <button type='submit' className='submit' onClick={handleSubmit}>
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