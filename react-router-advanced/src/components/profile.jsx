import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProfilLeDetails from './components/ProfileDetails';
// import ProfileSettings from './ProfileSettings';

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
      <Link to="details">Details</Link> | <Link to="settings">Settings</Link>        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;
