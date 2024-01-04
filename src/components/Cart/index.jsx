import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/index.jsx';
import "../Cart/styles.css";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/index.jsx';
import { FaTrash } from 'react-icons/fa';
import book from '../Assets/book.jpg';

const Cart = ({ cart, setCart, handleClick }) => {
  const [price, setPrice] = useState(0);
  const [merchandiseItems, setMerchandiseItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const navigate = useNavigate();

  const handlePrice = () => {
    let initialTotal = 0;
    cart.map((item) => {
      initialTotal += item.quantity * item.price;
    });
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

  const handleCheckout = () => {
    navigate('/checkout', { totalAmount: price });
  };

  useEffect(() => {
    const apiUrl = `http://127.0.0.1:5555/merchandises`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setMerchandiseItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [refresh]);

  const filterItemsByCategory = (category) => {
    return merchandiseItems.filter((item) => item.category === category);
  };

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
            <div id="my-cart">
              <div id="cart-container-div">
                <div id="cart-container">
                  <h3>Cart ({cart.length})</h3>
                    {cart.map((item) => (
                      <div key={item.id} id="cart-card">
                        <div id="img-div">
                          <img src={item.image} alt="item" />
                        </div>
                        <div id="cart-name-div">
                          <h5>{item.name}</h5>
                          <p onClick={() => handleRemove(item)} id="remove-btn" className="cart-div">
                            <FaTrash /> Remove
                          </p>
                        </div>
                        <div>
                          <h4>{item.price}</h4>
                          <div className="cart-card-btns">
                            <button onClick={() => handleIncrement(item)}>+</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => handleDecrement(item)}>-</button>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
              <div id="cart-amount">
                <h5>CART SUMMARY</h5>
                <div id="cart-summary">
                  <p>Subtotal</p>
                  <h5>${price}</h5>
                </div>
                <div id="cart-summary">
                  <p>Estimated Tax</p>
                  <h5>$0.00</h5>
                </div>
                <div id="cart-summary">
                  <h5>Total</h5>
                  <h4>${price}</h4>
                </div>
                <button onClick={handleCheckout} id="checkout-btn">
                    Checkout (${price})
                </button>
              </div>
            </div>
            <div className="suggestion">
              <h3>You may also like</h3>
              <div className="trending-div">
                {filterItemsByCategory('accessories').map((item) => (
                  <div className="shop-card" key={item.id}>
                    <img src={book} height="200" width="200" alt="" />
                    <div className="shop-card-amount">
                      <h5>{item.name}</h5>
                      <div className="shop-card-hero">
                        <h5>${item.price}</h5>
                        <p className="rating">
                          {Array.from({ length: Math.round(item.rating) }, (_, index) => (
                            <span key={index} className="star">
                              &#9733;
                            </span>
                          ))}
                          {Array.from({ length: 5 - Math.round(item.rating) }, (_, index) => (
                            <span key={index} className="star">
                              &#9734;
                            </span>
                          ))}
                        </p>
                      </div>
                      <button onClick={() => handleClick(item)}>Add to Cart</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          )}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
