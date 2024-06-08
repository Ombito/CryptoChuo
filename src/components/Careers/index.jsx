import React, { useState } from 'react';
import './careers.css';

const Careers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, phone, resume, coverLetter });
    };

    return (
        <div className="careers-container">
            <h1>Join Our Team</h1>
            <div className="careers-content">
                <div className="careers-info">
                    <p>
                        At CryptoChuo, we are always looking for passionate and talented individuals to join our team. We believe
                        in fostering a collaborative and innovative work environment where every team member can thrive and make
                        a meaningful impact. Check out our current openings and apply today!
                    </p>
                </div>
                <div className="careers-openings">
                    <h2>Current Openings</h2>
                    <ul>
                        <li>Blockchain Developer</li>
                        <li>Web3 Marketing Specialist</li>
                        <li>Content Creator</li>
                        <li>Customer Support Specialist</li>
                    </ul>
                </div>
                <div className="careers-form">
                    <h2>Apply Now</h2>
                    <form id="careerForm" onSubmit={handleSubmit}>
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
                            <label htmlFor="resume">Resume</label>
                            <input
                                type="file"
                                id="resume"
                                onChange={handleFileChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="coverLetter">Cover Letter</label>
                            <textarea
                                id="coverLetter"
                                value={coverLetter}
                                onChange={(e) => setCoverLetter(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Submit Application</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Careers;
