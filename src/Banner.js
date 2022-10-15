import React, { useState } from 'react';
import './Banner.css'; 
import Button from '@mui/material/Button';
import Search from './Search';
import { useNavigate } from "react-router-dom";

function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState (false);
  return (
    <div className = "Banner">
        <div className = "Banner_search">
            {showSearch && <Search />}
            <Button onClick={() => setShowSearch(!showSearch)} 
            className = "Banner_searchButton" variant = 'outlined'>
                {showSearch ? "Hide" : "Date picker"}
            </Button>

        </div>
       
        <div className = "Banner_description">
            <h1>Boredom Buster</h1>
            <h5>A friendly vacation planner </h5>

            <Button onClick={() => navigate('/Search')} variant = 'outlined'>Explore Nearby</Button>
        </div>

    </div>
  )
}

export default Banner