import { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ onSearch, userData, error }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async ({ username, location, minRepos }) => {
    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data.items || []); // Get the list of users
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Looks like we can\'t find the user');
      setUserData([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await onSearch({ username, location, minRepos });
    } catch (err) {
      console.error('Error fetching GitHub user');
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
          <p className="text-red-500">Looks like we can't find the user</p>
        ) : (
          userData && (
            <div className="border border-gray-300 p-4 rounded">
              <h2 className="text-lg">{userData.login}</h2>
              <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
              <p>Location: {userData.location || 'N/A'}</p>
              <p>Repositories: {userData.public_repos}</p>
              <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    location: PropTypes.string,
    public_repos: PropTypes.number,
    html_url: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
};

export default Search;
