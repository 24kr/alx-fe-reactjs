// services/githubService.js
import axios from 'axios'; // Import axios

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return the fetched data
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error; // Throw the error so it can be handled in the calling component
  }
};
