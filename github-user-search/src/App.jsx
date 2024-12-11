import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>GitHub User Search</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>Welcome to the GitHub User Search Application</div>} />
            <Route path="/search" element={<div>Search Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
