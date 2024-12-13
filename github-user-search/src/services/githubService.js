// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = '';

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        per_page: 10, // Pagination: adjust results per page if needed
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub users:', error);
    throw error;
  }
};
