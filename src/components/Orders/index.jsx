import React, { useEffect, useState } from 'react';
import './orders.css';
import { useNavigate } from 'react-router-dom';

const Orders = ({ user }) => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    if (!user) {
      navigate('/login');
    }

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         try {
    //             const response = await fetch('http://127.0.0.1:5555/orders', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     // 'Authorization': `Bearer ${user.token}`,
    //                 },
    //             });
    //             const data = await response.json();
    //             setOrders(data);
    //         } catch (error) {
    //             setError('Failed to fetch orders');
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchOrders();
    // }, [user.token]);

    useEffect(() => {
      const fetchOrders = async () => {
          try {
              const dummyOrders = [
                  {
                      id: 1,
                      date: '2023-05-15',
                      status: 'Delivered',
                      total: 150,
                      items: [
                          {
                              id: 1,
                              title: 'Blockchain Basics',
                              image: 'https://via.placeholder.com/80',
                              quantity: 1,
                              price: 50,
                          },
                          {
                              id: 2,
                              title: 'Advanced Cryptography',
                              image: 'https://via.placeholder.com/80',
                              quantity: 2,
                              price: 50,
                          },
                      ],
                  },
                  {
                      id: 2,
                      date: '2023-05-20',
                      status: 'Pending',
                      total: 100,
                      items: [
                          {
                              id: 3,
                              title: 'Smart Contracts 101',
                              image: 'https://via.placeholder.com/80',
                              quantity: 1,
                              price: 100,
                          },
                      ],
                  },
              ];

              setOrders(dummyOrders);
          } catch (error) {
              setError('Failed to fetch orders');
          } finally {
              setLoading(false);
          }
      };

      fetchOrders();
  }, []);

  const handleOrderClick = (order) => {
    navigate(`/orders/${order.id}`, { state: { order } });
  };

    if (loading) {
        return <div className="orders-container"><p>Loading orders...</p></div>;
    }

    if (error) {
        return <div className="orders-container"><p>{error}</p></div>;
    }

    return (
      <div className="orders-container">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
          <p>You have no orders yet.</p>
      ) : (
          <div className="orders-list">
              {orders.map((order) => (
                  <div key={order.id} className="order-card" onClick={() => handleOrderClick(order)}>
                      <h2>Order #{order.id}</h2>
                      <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
                      <p><strong>Status:</strong> {order.status}</p>
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
                      <h3 className="order-total">Total: ${order.total}</h3>
                  </div>
              ))}
          </div>
      )}
  </div>
);
};

export default Orders;
