// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/results';
import { searchUsers } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useState({});

  const handleSearch = async (params) => {
    setSearchParams(params);
    const data = await searchUsers(params);
    setUsers(data.items);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const data = await searchUsers({ ...searchParams, page: nextPage });
    setUsers((prevUsers) => [...prevUsers, ...data.items]);
    setPage(nextPage);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Search onSearch={handleSearch} />
      <Results users={users} onLoadMore={handleLoadMore} />
    </div>
  );
};

export default App;
