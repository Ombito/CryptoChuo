import React from 'react';
import './account.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Account = ({user}) => {
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
  }
  return (
    <div>Account</div>
  )
}

export default Account;