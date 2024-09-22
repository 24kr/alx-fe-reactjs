import axios from 'axios';

export const fetchUserData = async ({ username, location, minRepos }) => {
  const queryParts = [`type:user`];
  
  if (username) queryParts.push(`"${username}"`);
  if (location) queryParts.push(`location:"${location}"`);
  if (minRepos) queryParts.push(`repos:>=${minRepos}`);

  const query = queryParts.join(' ');
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data; // Return user data
  } 
  catch (error) {
    throw error; // Throw the error to be handled in the component
  }
};
