import React from 'react';

const Cart = ({cart}) => {

  return (
    <div>
      {cart.map(item => (
        <>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.quantity}</p>
        </>
      ))}
    </div>
  )
}

export default Cart;