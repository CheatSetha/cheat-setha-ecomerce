import React from "react";

const UserCard = ({name, role,avatar,email,id}) => {
  return (
    <div className="card w-full md:w-[200px] bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar flex justify-center">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img 
            alt={name?name:"setha"}
            src={avatar?avatar :"https://www.looper.com/img/gallery/just-how-powerful-is-demon-slayers-nezuko/intro-1665597253.jpg" }/>
          </div>
        </div>

        <h2 className="card-title flex justify-center">{name? name : "setha"}</h2>
        <p> {email?email: "setha@gmail.com"}</p>
        <p>{role?role:" admin"}</p>

      </div>
    </div>
  );
};

export default UserCard;
