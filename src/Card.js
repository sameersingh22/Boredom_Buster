import React from 'react';
import './Card.css'

function Card({ src, title, description, website }) {
    return (
        <div className='card'>
            <a href={website} style={{textDecoration: 'none'}} rel="noreferrer">
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <p>{website}</p>
                
            </div>
            </a>
        </div>
    )
}

export default Card
