import React from 'react';
import '../Checkout/style.css';
import Navbar from '../Navbar/index';
import Footer from '../Footer/index';


const Checkout = () => {
  return (
    <div>
        <Navbar />
        <div id="checkout" class="container">
            <div>
                <h2>Basic Information</h2>
                <div>
                    <form id="checkout-form">
                        <div id="name-div" className="input-div">
                            <div>
                                <label>First Name</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <label>Full Address</label>
                        <textarea></textarea>
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
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout;