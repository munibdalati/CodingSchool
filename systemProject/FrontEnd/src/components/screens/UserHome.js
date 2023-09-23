import React from "react";
import { useNavigate } from "react-router-dom";

const UserHome = ({ privateData }) => {
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <>
    
      <div style={{ background: "green", color: "white" }}>{privateData}</div>
      <div className="whole-page">
        <h2>Welcome, {username}!</h2>
        <h3>Your email is: {email}</h3>

        <button onClick={logoutHandler}>Logout</button>
      </div>
    </>
  );
};

export default UserHome;
