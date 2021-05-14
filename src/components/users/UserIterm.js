import React from "react";
import {Link } from 'react-router-dom'

export const  UserIterm = (props) => {
  
    const { avatar_url, login, } =  props.user
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="just a random"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
            More
          </Link>
        </div>
      </div>
    );
}


export default UserIterm;
