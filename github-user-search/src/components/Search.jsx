import { useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserData } from '../services/githubService'; // Assuming the function is already there

const Search = ({ setUserData, setError }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle the search and fetch GitHub user data
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loading state while fetching

    try {
      const data = await fetchUserData({ username, location, minRepos });
      setUserData(data.items || []); // Set user data
      setError(null); // Clear any error
    } catch (err) {
      setError("Looks like we can't find the user");
      setUserData([]); // Clear user data on error
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSearch} className="flex flex-col space-y-4">
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
    </div>
  );
};

Search.propTypes = {
  setUserData: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default Search;
