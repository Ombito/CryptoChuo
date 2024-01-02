import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/navbar.jsx';
import "../Cart/styles.css";


const Cart = ({ cart, setCart }) => {
    const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let initialTotal = 0;
    cart.map((item)=> {
        initialTotal += item.quantity * item.price
        })
        const roundedTotal = parseFloat(initialTotal.toFixed(2));
        setPrice(roundedTotal);
  };

  const handleIncrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    );
    setCart(updatedCart);
    handlePrice();
  };

  const handleDecrement = (item) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    const cartAfterDecrement = updatedCart.filter((cartItem) => cartItem.quantity > 0);
    setCart(cartAfterDecrement);
    handlePrice();
  };

  const handleRemove = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);
 

    return (
        <div>
            <Navbar />
            <div id="cart" class="container">
                <h1>Shopping Cart</h1>
                <div id="cart-hero">
                    {cart.length === 0 ? (
                        <div>
                            <h4>Your cart is empty.</h4>
                        </div>
                        ) : (
                            <>
                                {cart.map(item => (
                                    <div key={item.id} id="cart-card">
                                        <img src={item.image} alt="item" />
                                        <h5>{item.name}</h5>
                                        <div className='cart-card-btns'>
                                            <button onClick={() => handleIncrement(item)}>+</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => handleDecrement(item)}>-</button>
                                        </div>
                                        <h4>{item.price}</h4>
                                        <button onClick={() => handleRemove(item)} id="remove-btn">Remove</button>
                                    </div>
                                ))}
                                <div id="cart-amount">
                                    <h4>Total Amount Of Your Cart</h4>
                                    <h2>${price}</h2>
                                </div>
                                <button>Proceed to Checkout</button>
                            </>
                        )}    
                        </div>
                
            </div>
        </div>
    )   
}
export default Cart;