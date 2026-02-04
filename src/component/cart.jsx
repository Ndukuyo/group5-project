import React from 'react';

const CartButton = ({ onClick, itemCount }) => (
  <button onClick={onClick} style={{ position: 'relative', padding: '10px 20px', fontSize: '16px' }}>
    🛒 Cart
    {itemCount > 0 && (
      <span style={{
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        background: 'red',
        color: 'white',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px',
      }}>
        {itemCount}
      </span>
    )}
  </button>
);

export default CartButton;
