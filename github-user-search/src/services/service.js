const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const fetchGitHubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${API_KEY}`
    }
  });
  return response.data;
};
