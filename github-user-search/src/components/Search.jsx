import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Search = ({ onSearch, userData, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Fetch User Data from GitHub API
  const fetchUserData = async ({ username, location, minRepos }) => {
    try {
      const query = `q=${username ? `${username}+` : ''}${
        location ? `location:${location}+` : ''
      }${minRepos ? `repos:>=${minRepos}` : ''}`;
      
      const response = await axios.get(`https://api.github.com/search/users?${query}`);
      return response.data;
    } catch {
      throw new Error('Error fetching GitHub user');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const data = await fetchUserData({ username, location, minRepos });
      onSearch(data); // Pass the result to the parent component (App)
    } catch {
      console.error('Error fetching GitHub users');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
        {isLoading && <p>Loading...</p>}
      </form>

      {/* Results Section */}
      <div className="mt-4">
        {error ? (
          <p className="text-red-500">Looks like we can not find the user</p>
        ) : (
          userData && userData.length > 0 && (
            <div>
              {userData.map((user) => (
                <div key={user.login} className="border border-gray-300 p-4 rounded mb-4">
                  <h2 className="text-lg">{user.login}</h2>
                  <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
                  <p>Location: {user.location || 'N/A'}</p>
                  <p>Repositories: {user.public_repos}</p>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      location: PropTypes.string,
      public_repos: PropTypes.number,
      html_url: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.string,
};

export default Search;
