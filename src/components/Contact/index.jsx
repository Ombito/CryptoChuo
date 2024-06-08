import React, { useState } from 'react';
import './style.css';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
    };

    return (
        <div className="contact-us-container">
            <h1>Get in Touch</h1>
            <div className="contact-content">
                <div className="contact-form-submit">
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                <div className="map-container">
                    <h2>Our Location</h2>
                    <iframe
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.509262619126!2d36.798143089743!3d-1.2702988999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1aebe7a4b835%3A0x4f48419e37f2b2b7!2sWestlands%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1614695309023!5m2!1sen!2ske"
                         width="600"
                         height="450"
                         allowFullScreen=""
                         loading="lazy"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
