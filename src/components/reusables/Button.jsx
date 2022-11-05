import React, { useState } from 'react';
import '../../styles/button.css';
import Modal from './Modal';

export default function Button({ buttonText }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        className='button'
        onClick={() => {setModalOpen(true)}}>
        {buttonText}
      </button>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  )
};