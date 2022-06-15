import React from 'react'
import './style.css'
const Card = () => {
  return (
    <>
        <div className='card-container'>
            <div className='card-img'>
                <img src="https://i.ibb.co/W2zzNzN/Rectangle-24.png" alt="product" border="0"/>
            </div>
            <div className='card-desc'>
                <p className='m-0 p-0'>Jam Tangan Casio</p>
                <h6 className='m-0 p-0 text-muted'>Aksesoris</h6>
                <p>Rp.250.000</p>
            </div>
        </div>
    </>
  )
}

export default Card