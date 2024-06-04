import React from 'react';
import './account.css';
import { useLocation, useNavigate } from 'react-router-dom';
import banner from '../Assets/banner4.jpg';


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

  return (
    <div className='account'>
      <div className="profile-banner">
        <div className="user-profile-banner">
          <div className='modal-initials-div'>
            <p className='modal-initials'>{getInitials(user.full_name)}</p>
            <div>
              <h3>{user.full_name}</h3>
              <h6 className="user-email">{user.email}</h6>
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
            <h3>Favourites</h3>
            <p>You have not favourited any courses yet</p>
          </div>
          <div className="account-item-hero">
            <h3>Job alerts</h3>
            <p>You have not signed up for any job alerts yet</p>
          </div>
          <div className="account-item-hero">
            <h3>Devices</h3>
            <p>Current browser </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account;