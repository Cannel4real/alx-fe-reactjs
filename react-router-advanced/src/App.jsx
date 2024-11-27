import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost'; // Adjust the path if necessary
import ProtectedRoute from './components/ProtectedRoute'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog/:postId" element={<BlogPost />} />
        Using the Protected Route
      <Route
        path="/profile/*"
        element={
          <ProtectedRoute isAuthenticated={true}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/blog/:postId" element={<BlogPost />} />
    </Routes>
    </Router>
  );
}

export default App;
