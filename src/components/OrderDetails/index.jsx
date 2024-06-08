import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './orderDetails.css';

const OrderDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { order } = location.state;

    const handleBackClick = () => {
        navigate('/orders');
    };

    return (
        <div className="order-details-container">
            <h1>Order Details</h1>
            <button onClick={handleBackClick} className="back-button">Back to Orders</button>
            <div className="order-summary">
                <h2>Order #{order.id}</h2>
                <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {order.status}</p>
                <p><strong>Total:</strong> ${order.total}</p>
            </div>
            <div className="order-items">
                {order.items.map((item) => (
                    <div key={item.id} className="order-item">
                        <img src={item.image} alt={item.title} className="order-item-image" />
                        <div className="order-item-details">
                            <h3>{item.title}</h3>
                            <p><strong>Quantity:</strong> {item.quantity}</p>
                            <p><strong>Price:</strong> ${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderDetails;
