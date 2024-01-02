import React from 'react';
import '../Checkout/style.css';
import Navbar from '../Navbar/index';

const Checkout = () => {
  return (
    <div>
        <Navbar />
        <div id="checkout" class="container">
            <div>
                <h2>Basic Information</h2>
                <div>
                    <form>
                        <div>
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
                        <div>
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
    </div>
  )
}

export default Checkout;