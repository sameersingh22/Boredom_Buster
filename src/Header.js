import React from 'react';
import './Header.css'; 
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './fonts/Inspiration/Inspiration-Regular.ttf';

function Header() {

  const navigate = useNavigate();

  return (
    <div className='header'>
      <Link to = '/'>
       
      <Button onClick={() => navigate('/')} ><HomeIcon /></Button>
      Boredom Buster 
        
        </Link>

        <div className = "header_center"> 
         
        <input type = "text" />
      
        <Button onClick={() => navigate('/Search')} ><SearchIcon /></Button>
        
        </div>

        <div className="header_right">
        <Button onClick={() => navigate('/User')} ><Avatar /></Button>

            
        </div>


    </div>

  )
}

export default Header