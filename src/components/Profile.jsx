import React from "react";
import useCheckAuth from "../hooks/checkAuth";

const Profile = () => {
  const { handleLogout } = useCheckAuth();
  return (
    <div>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default Profile;
