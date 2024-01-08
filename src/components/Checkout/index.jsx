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
                    <div className="delivery-address-form">
                        <form id="checkout-form">
                            <h3>Delivery Address</h3>
                            <div className="name-hero">
                                <div>
                                    <label>First name</label>
                                    <input type="text" placeholder='Enter first name' className="name-div" required/>
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input type="text" placeholder='Enter last name' className="name-div" required/>
                                </div>
                            </div>
                            <label>Phone Number</label>
                            <input type="number" placeholder='Enter phone number' required />
                            <label>Street Address</label>
                            <input type="text" placeholder='Enter Street and Number' required />
                            <div className="input-div">
                                <div>
                                    <label>City</label>
                                    <input type="text" placeholder='City' className="address-div" required/>
                                </div>
                                <div>
                                    <label>State</label>
                                    <input type="text" placeholder='State' className="address-div" required/>
                                </div>
                                <div>
                                    <label>Zip Code</label>
                                    <input type="text" placeholder='00-000' className="address-div" required/>
                                </div>
                            </div>
                            <div>
                                <h3>Choose your payment method</h3>
                            </div> 
                            <div>
                                <h3>Payment Details</h3>
                                {!paymentComplete && <Paypal onPaymentSuccess={handlePaymentSuccess} />}
                            </div>
                        </form>
                    </div>
                    <div id="order-summary">
                        <h3>Order Summary</h3>
                        <div>
                            <div>
                                <input type='text' placeholder='Gift card or discount code' />
                                <button>Apply</button>
                            </div>
                            <div className="input-div">
                                <h5>Sub Total</h5>
                                <h4>$</h4>
                            </div>
                            <div className="input-div">
                                <h5>Delivery Charges</h5>
                                <h4>$</h4>
                            </div>
                            <div></div>
                            <div className="input-div">
                                <h5>Grand Total</h5>
                                <h4>$</h4>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6>Need Help? Contact us!</h6>
                                <p>Please call</p>
                                <h5>+254722222222</h5>
                                <p>Monday-Friday 8:00-20:00</p>
                                <p>Saturday 8:00-16:00</p>
                            </div>
                            <div>
                                <h6>Delivery Methods</h6>
                                <div>
                                    <img src='' alt="FedEx" />
                                    <img src='' alt="DHL" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-policy">
                    <div>
                        <img src="" />
                        <div>
                            <h5>Secure shopping</h5>
                            <p>Completely embrace out of box human capital with plug and play</p>
                        </div>
                    </div>
                    <div>
                        <img src="" />
                        <div>
                            <h5>Free and easy returns</h5>
                            <p>Completely embrace out of box human capital with plug and play</p>
                        </div>
                    </div>
                    <div>
                        <img src="" />
                        <div>
                            <h5>17 years of experience</h5>
                            <p>Completely embrace out of box human capital with plug and play</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout;