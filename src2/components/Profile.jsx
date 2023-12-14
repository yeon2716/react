//rafce

import React from "react";

const Profile = (img, name, title, isNew) => {
  // console.log(props);
  //const img = props.img;
  // const name = props.name;
  // const title = props.title;

  // const {img,name,title}=props;
  return (
    <div className="profile">
      <img src={img} alt="avatar" />
      {/*  {props.isNew?<span className="new">신입</span>:""} */}
      {isNew && <span className="new">신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Profile;