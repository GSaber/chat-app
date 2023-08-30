import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">CHAT-APP</span>
      <div className="user">
        <img
          src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/271550358_2086270848192033_7272079540048003586_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=PfU5SvWpv68AX9CDIvr&_nc_ht=scontent.ftun15-1.fna&oh=00_AfBEcwwrvqSyIIJB5riAUkQpuOI0tM2kG609I5-cDS4etA&oe=64F4FCCF"
          alt=""
        />
        <span>Ayari Maryem</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
