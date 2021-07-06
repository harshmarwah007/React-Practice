/** @format */

import React from "react";

const Contact = ({ imgURL, name, email, phone, id }) => {
  return (
    <div>
      <div className="card">
        <div className="top" >
        
          <h2 className="name">{name}</h2>
          <img className="img circle-img" src={imgURL} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p className="info">{phone}</p>
          <p className="info">{email}</p>
        </div>
      </div>
    </div>
  );
};
export default Contact;
