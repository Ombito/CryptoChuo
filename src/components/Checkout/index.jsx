import React, { useState} from 'react';
import '../Checkout/style.css';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';
import { FaCheck } from  'react-icons/fa';
import Paypal from '../Paypal/paypal';
import DHL from '../Assets/dhl1.png';
import Fedex from '../Assets/fedex.png';
import customer from '../Assets/customer.png';
import shoppingcart from '../Assets/shopping-cart.png';
import shopping from '../Assets/shopping.png';
import delivery from '../Assets/delivery.png';
import paypal from '../Assets/paypal.png';
import { useLocation } from 'react-router-dom';


const Checkout = () => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [formComplete, setFormComplete] = useState(false);

    const handleInputChange = () => {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const streetAddress = document.getElementById('street-address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zip-code').value;
    
        const isFormComplete =
          firstName.trim() !== '' &&
          lastName.trim() !== '' &&
          phoneNumber.trim() !== '' &&
          streetAddress.trim() !== '' &&
          city.trim() !== '' &&
          state.trim() !== '' &&
          zipCode.trim() !== '';
    
        setFormComplete(isFormComplete);
      };


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
                    <div className="checkout-range">
                        <p id="cart-checkout"className="checkout-head"><FaCheck className="check-icon" /></p>
                        <p>Shopping Cart</p>
                    </div>
                    <div className='line'></div>
                    <div className="checkout-range">
                        <p className="checkout-head">2</p>
                        <p>Delivery Address</p>
                    </div>
                    <div className='line'></div>
                    <div className="checkout-range">
                        <p className="checkout-head">3</p>
                        <p>Billing & Payment</p>
                    </div>
                </div>
                <div id="order-details">
                    <div className="delivery-address-form">
                        <form id="checkout-form">
                            <h3>Shipping Address</h3>
                            <div className="name-hero">
                                <div>
                                    <label>First name</label>
                                    <input type="text" placeholder='Enter first name' className="name-div" onChange={handleInputChange} required/>
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input type="text" placeholder='Enter last name' className="name-div" onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <label>Phone Number</label>
                            <input type="tel" placeholder='Enter phone number' onChange={handleInputChange} required />
                            <label>Street Address</label>
                            <input type="text" placeholder='Enter street and number' onChange={handleInputChange} required />
                            <div className="input-div">
                                <div>
                                    <label>City</label>
                                    <input type="text" placeholder='City' className="address-div" onChange={handleInputChange} required/>
                                </div>
                                <div>
                                    <label>State</label>
                                    <input type="text" placeholder='State' className="address-div" onChange={handleInputChange} required/>
                                </div>
                                <div>
                                    <label>Zip Code</label>
                                    <input type="text" placeholder='00-000' className="address-div" onChange={handleInputChange} required/>
                                </div>
                            </div>
                            <div id="payment">
                                <div>
                                    <h3>Billing Details</h3>
                                    {!formComplete && <p>Please fill in all form fields before proceeding to payment.</p>}
                                    {!paymentComplete && <Paypal onPaymentSuccess={handlePaymentSuccess} />}
                                </div>
                            </div>
                        </form>
                    </div>
                    <div id="order-summary">
                        <div className="order-summary-hero">
                            <h5>Order Summary</h5>
                            <div className="voucher-div">
                                <input type='text' placeholder='Discount code' />
                                <button id="voucher-btn">Apply</button>
                            </div>
                            <div className="input-div">
                                <h6>Sub Total</h6>
                                <h5>${totalAmount}</h5>
                            </div>
                            <div className="input-div">
                                <h6>Delivery Charges</h6>
                                <h5>$</h5>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className="input-div">
                                <h5>Grand Total</h5>
                                <h5>$</h5>
                            </div>
                        </div>
                        <div className="info-hero">
                            <div className="info-box">
                                <h6>Need Help? Contact us</h6>
                                <div>Please call:<h4>+254722222222</h4></div>
                                <p>Monday-Friday 8:00-20:00</p>
                                <p>Saturday 8:00-16:00</p>
                            </div>
                            <div className="info-box">
                                <h6>Delivery Methods</h6>
                                <div className="delivery-img">
                                    <img src={Fedex} alt="FedEx" height="50"/>
                                    <img src={DHL} alt="DHL" height="50"/>
                                </div>
                                <h6 style={{ marginTop: '5px' }}>Payment Method</h6>
                                <div className="delivery-img">
                                    <img src={paypal} alt="Paypal" height="50"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-policy">
                    <div>
                        <h6>Quick Delivery</h6>
                        <img src={delivery} alt="easy checkout" />
                    </div>
                    
                    <div>
                        <h6>Easy Checkout</h6>
                        <img src={shoppingcart} alt="easy checkout" />
                    </div>
                    <div>
                        <h6>Seamless Shopping Experience</h6>
                        <img src={shopping} alt="easy checkout" />
                    </div>
                    <div>
                        <h6>24/7 Customer Support</h6>
                        <img src={customer} alt="easy checkout" />
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout;