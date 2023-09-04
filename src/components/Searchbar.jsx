import React from "react";

const Searchbar = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/15242091/pexels-photo-15242091/free-photo-of-gens-centrale-feuilles-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="userChatInfo">
          <span>Saber</span>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
