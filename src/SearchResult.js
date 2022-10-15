import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    website,
    
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchResult__heart" />

            <div className='searchResult__info'>
            <a href={website} style={{textDecoration: 'none'}} rel="noreferrer">
                <div className="searchResult__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                    <p>{website}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarBorderIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                            
                        </p>
                    </div>
                   
                </div>
                </a>
            </div>
        </div>
    )
}

export default SearchResult
