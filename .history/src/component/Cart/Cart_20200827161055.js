import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    return (
        <div>
            This is card {cart.length}
        </div>
    );
};

export default Cart;