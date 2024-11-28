import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
// import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';


function App() {
  return (
    <Router>

    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/profile">Profile</Link>
    </nav>

    <Routes>
       <Route path="details" element={<ProfileDetails />} />
          {/* <Route path="settings" element={<ProfileSettings />} /> */}
        <Route path="/blog" element={<BlogPost />} />
    </Routes>
  </Router>
  );
}

export default App;
