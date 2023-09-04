import React from "react";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={require("../img/attachment.png")} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={require("../img/imagegallery.png")} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
