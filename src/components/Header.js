import React from 'react';
import './Header.css';
import profileImage from 'C:/Users/anvay/personal-info-website/src/Assests/IMG_0396.JPG'; // Add your profile image path here

function Header({ name, introduction, title, degree }) {
  return (
    <header className="header-container">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="text-section">
          <h1 className="name">{name}</h1>
          <p className="introduction">
            Hello! I'm a passionate Computer Science student with a keen interest in technology and innovation.
          </p>
          <h2 className="title">{title}</h2>
          <p className="degree">{degree}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
