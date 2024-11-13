import {UserContext} from "./UserContext";
import React, {useContext} from "react"; 

const UserProfile = () => {
  const {userData} = useContext(UserContext);
    return (
      <div>
        <h2>{userData.name}</h2>
        <p>Age: {age}</p>
        <p>Bio: {bio}</p>
      </div>
    );
  };
console.log(UserProfile);

  export default UserProfile;