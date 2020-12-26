import { Link } from 'react-router-dom';
import React from 'react';
import './Card.css';

function Card({ name, title, data, url, author, date }) {
    return (
        <div className="card">
            {title && <h3>{title}</h3>}
            {name && <h4>{name}</h4>}
            {data && <p>{data}</p>}
            <div className="card__info">
                <div className="card__date">
                    {date && <p><span>Published on:-</span>{date}</p>}
                </div>
                <div className="card__readMore">
                    <a href={url}>Read More...</a>
                </div>
            </div>
        </div>
    )
}

export default Card
