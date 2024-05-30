import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Paypal from '../Paypal/paypal';
import WhatsAppChat from '../WhatsAppChat/index.jsx';
import DHL from '../Assets/dhl1.png';
import Fedex from '../Assets/fedex.png';
import customer from '../Assets/customer.png';
import shoppingcart from '../Assets/shopping-cart.png';
import shopping from '../Assets/shopping.png';
import delivery from '../Assets/delivery.png';
import paypal from '../Assets/paypal.png';
import '../Checkout/style.css';

const Checkout = ({ user }) => {
    const location = useLocation();
    const totalAmount = location.state?.totalAmount || 0;
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [formComplete, setFormComplete] = useState(false);
    const [currentStep, setCurrentStep] = useState(2);
    const navigate = useNavigate();

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

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (formComplete) {
            setCurrentStep(3);
        }
    };

    const handlePaymentSuccess = () => {
        setPaymentComplete(true);
    };

    const handleBack = () => {
        if (currentStep > 2) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    if (!user) {
        navigate('/login');
    }

    return (
        <div>
            <div id="checkout" className="container">
                <h2>Secure Checkout</h2>
                <div className="checkout-status-bar">
            <div className={`status-step ${currentStep > 1 ? 'completed' : ''}`}>
                <div className="status-icon">1</div>
                <div className="status-label">Shopping Cart</div>
            </div>
            <div className={`status-line ${currentStep > 1 ? 'completed' : ''}`}></div>
            <div className={`status-step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>
                <div className="status-icon">2</div>
                <div className="status-label">Delivery Address</div>
            </div>
            <div className={`status-line ${currentStep > 2 ? 'completed' : ''}`}></div>
            <div className={`status-step ${currentStep === 3 ? 'active' : ''}`}>
                <div className="status-icon">3</div>
                <div className="status-label">Payment Method</div>
            </div>
        </div>
                <div id="order-details">
                    
                        <div className="delivery-address-form">
                            <form id="checkout-form" onSubmit={handleFormSubmit}>
                                {currentStep === 2 && (
                                    <>
                                        <h3>Shipping Address</h3>
                                        <div className="name-hero">
                                            <div>
                                                <label>First name</label>
                                                <input id="first-name" type="text" placeholder='Enter first name' className="name-div" onChange={handleInputChange} required />
                                            </div>
                                            <div>
                                                <label>Last name</label>
                                                <input id="last-name" type="text" placeholder='Enter last name' className="name-div" onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <label>Phone Number</label>
                                        <input id="phone-number" type="tel" placeholder='Enter phone number' onChange={handleInputChange} required />
                                        <label>Street Address</label>
                                        <input id="street-address" type="text" placeholder='Enter street and number' onChange={handleInputChange} required />
                                        <div className="input-div">
                                            <div>
                                                <label>City</label>
                                                <input id="city" type="text" placeholder='City' className="address-div" onChange={handleInputChange} required />
                                            </div>
                                            <div>
                                                <label>State</label>
                                                <input id="state" type="text" placeholder='State' className="address-div" onChange={handleInputChange} required />
                                            </div>
                                            <div>
                                                <label>Zip Code</label>
                                                <input id="zip-code" type="text" placeholder='00-000' className="address-div" onChange={handleInputChange} required />
                                            </div>
                                        </div>
                                        <button type="submit" disabled={!formComplete}>Proceed to Payment</button>
                                    </>
                            )}
                            {currentStep === 3 && (
                                <div id="payment">
                                    <h3>Billing Details</h3>
                                    {!paymentComplete && <Paypal onPaymentSuccess={handlePaymentSuccess} />}
                                    <button onClick={handleBack}>Back</button>
                                </div>
                            )}
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
                                    <img src={Fedex} alt="FedEx" height="50" />
                                    <img src={DHL} alt="DHL" height="50" />
                                </div>
                                <h6 style={{ marginTop: '5px' }}>Payment Method</h6>
                                <div className="delivery-img">
                                    <img src={paypal} alt="Paypal" height="50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-policy">
                    <div>
                        <img src={delivery} alt="easy checkout" />
                        <h6>Quick Delivery</h6>
                    </div>
                    <div>
                        <img src={shoppingcart} alt="easy checkout" />
                        <h6>Easy Checkout</h6>
                    </div>
                    <div>
                        <img src={shopping} alt="easy checkout" />
                        <h6>Seamless Shopping Experience</h6>
                    </div>
                    <div>
                        <img src={customer} alt="easy checkout" />
                        <h6>24/7 Customer Support</h6>
                    </div>
                </div>
            </div>
            <WhatsAppChat />
        </div>
    );
}

export default Checkout;
