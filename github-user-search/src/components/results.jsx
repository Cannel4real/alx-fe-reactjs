// src/components/Results.jsx
import React from 'react';

const Results = ({ users, onLoadMore }) => {
  return (
    <div className="bg-white shadow-md rounded p-6 mt-4">
      <h2 className="text-lg font-bold mb-4">Search Results</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id} className="border-b py-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
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
                    <p className="text-sm text-gray-600">
                      Location: {user.location || 'N/A'}
                    </p>
                    <p className="text-sm text-gray-600">
                      Repositories: {user.public_repos || 'N/A'}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button
            onClick={onLoadMore}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Results;
