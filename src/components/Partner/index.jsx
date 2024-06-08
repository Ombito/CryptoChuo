import React, { useState } from 'react';
import './style.css';

const BecomePartner = () => {
    const [companyName, setCompanyName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ companyName, contactPerson, email, phone, message });
    };

    return (
        <div className="become-partner-container">
            <h1>Join Us as a Partner</h1>
            <div className="partner-content">
                <div className="partner-info">
                    <p>
                        At CryptoChuo, we value partnerships that help us drive innovation and growth in the Web 3.0 space.
                        By partnering with us you get to be a part of an exciting journey towards decentralized education and
                        blockchain technology advancements. We believe in collaboration and mutual growth. Join us and let's
                        create a brighter future together!
                    </p>
                </div>
                <div className="partner-form">
                    <h2>Partner with Us</h2>
                    <form id="partner-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPerson">Contact Person</label>
                            <input
                                type="text"
                                id="contactPerson"
                                value={contactPerson}
                                onChange={(e) => setContactPerson(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BecomePartner;
