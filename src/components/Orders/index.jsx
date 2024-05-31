import React from 'react';
import './style.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Orders = ({user}) => {
  const navigate = useNavigate();
//   if (!user) {
//     navigate('/login');
//   }


  return (
    <div>Orders</div>
  )
}

export default Orders;