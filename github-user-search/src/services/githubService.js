import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    throw error; // Throw the error to be handled in the component
  }
};
