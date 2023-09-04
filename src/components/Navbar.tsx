import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">CHAT-APP</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/15242091/pexels-photo-15242091/free-photo-of-gens-centrale-feuilles-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <span>Ayari Maryem</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
