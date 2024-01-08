import React, { useState} from 'react';
import '../Checkout/style.css';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import { FaCheck } from  'react-icons/fa';
import Paypal from '../Paypal/paypal';

const Checkout = () => {
    const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePaymentSuccess = () => {
    setPaymentComplete(true);
  }
  return (
    <div>
        <Navbar />
        <div id="checkout" class="container">
            <div>
                <h2>Secure Checkout</h2>
                <div className="checkout-hero">
                    <div>
                        <p id="cart-checkout"className="checkout-head"><FaCheck className="check-icon" /></p>
                        <p>Shopping Cart</p>
                    </div>
                    <div className='line'></div>
                    <div>
                        <p className="checkout-head">2</p>
                        <p>Delivery Address</p>
                    </div>
                    <div className='line'></div>
                    <div>
                        <p className="checkout-head">3</p>
                        <p>Billing & Payment</p>
                    </div>
                </div>
                <div id="order-details">
                    <form id="checkout-form">
                        <h3>Delivery Address</h3>
                        <label>Full Address</label>
                        <textarea></textarea>
                        <label>Phone Number</label>
                        <input type="number" placeholder='Enter phone number'required />
                        <div className="input-div">
                            <div>
                                <label>City</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>State</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Zip Code</label>
                                <input type="text" />
                            </div>
                        </div>
                    </form>
                    <div>
                        <h3>Order Summary</h3>
                        <div>
                            <div>
                                <input type='text' placeholder='Gift card or discount code' />
                                <button>Apply</button>
                            </div>
                            <div>
                                <h5>Sub Total</h5>
                                <h4>$</h4>
                            </div>
                            <div>
                                <h5>Delivery Charges</h5>
                                <h4>$</h4>
                            </div>
                            <div></div>
                            <div>
                                <h5>Order Total</h5>
                                <h4>$</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Choose your payment method</h3>
                </div>
                <div>
                    <h3>Payment Details</h3>
                    {!paymentComplete && <Paypal onPaymentSuccess={handlePaymentSuccess} />}
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout;