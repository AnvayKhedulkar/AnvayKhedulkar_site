import React from 'react';
import './Card.css';

function Card({ name, link }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="card-button">Visit</button>
      </a>
    </div>
  );
}

export default Card;
