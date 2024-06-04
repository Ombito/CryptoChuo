import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import banner from '../Assets/banner4.jpg';
import { FaCalendarAlt } from 'react-icons/fa';

const Account = ({user}) => {
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
  }

  const getInitials = (fullName) => {
    const names = fullName.split(' ');
    const initials = names.map(name => name.charAt(0)).join('').substring(0, 2);
    return initials.toUpperCase();
};

const currentDate = new Date().toLocaleDateString();

  return (
    <div className='account-container'>
      <div className="profile-banner">
        <div className="user-profile-banner">
          <div className='user-account-details'>
            <p className='user-account-initials'>{getInitials(user.full_name)}</p>
            <div>
              <h3>{user.full_name}</h3>
              <h6 className="user-account-email">{user.email}</h6>
            </div>
          </div>
          <img className='profile-img' src={banner} alt="" />
        </div>
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-count">{user.certificates}</span>
            <span className="stat-label">0 Certificates</span>
          </div>
          <div className="stat">
            <span className="stat-count">{user.trophies}</span>
            <span className="stat-label">0 Trophies</span>
          </div>
          <div className="stat">
            <span className="stat-count">{user.badges}</span>
            <span className="stat-label">0 Badges</span>
          </div>
        </div>
      </div>
      <div className="account-summary">
        <div className="account-nav">
          <li>My courses</li>
          <li>Achievements</li>
          <li>My Orders</li>
          <li>Help Center</li>
        </div>
        <div className="account-section">
          <div className="account-item-hero">
            <h4><ion-icon name="star-outline"></ion-icon> Favourites</h4>
            <p>You have not favourited any courses yet</p>
          </div>
          <div className="account-item-hero">
            <h4><ion-icon name="alert-circle-outline"></ion-icon> Job alerts</h4>
            <p>You have not signed up for any job alerts yet</p>
          </div>
          <div className="account-item-hero">
            <h4><ion-icon name="laptop-outline"></ion-icon> Devices</h4>
            <p>Connected in current browser</p>
            <p><FaCalendarAlt className="calendar-icon" /> <span>{currentDate}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;