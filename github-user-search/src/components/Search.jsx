// src/components/Search.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      setUsers(response.data.items || []);
    } catch (err) {
      setError('Failed to fetch users. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded shadow hover:bg-indigo-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="space-y-4">
        {users.length > 0 &&
          users.map((user) => (
            <div
              key={user.id}
              className="p-4 border rounded shadow hover:bg-gray-50 flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {user.login}
                </a>
                {user.type && <p className="text-sm text-gray-600">{user.type}</p>}
              </div>
            </div>
          ))}
      </div>

      {!loading && !error && users.length === 0 && (
        <p className="text-center text-gray-600">No users found. Try a different search.</p>
      )}
    </div>
  );
};

export default Search;
