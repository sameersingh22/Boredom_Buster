import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Name : {user.displayName}</h2>
      <h2>Email : {user.email}</h2>
      <button className = "userButton" onClick={logoutUser}>Log out</button>
      <Button className = "userButton" onClick={() => navigate('/')} >Home</Button>
    </div>
  );
};

export default Dashboard;