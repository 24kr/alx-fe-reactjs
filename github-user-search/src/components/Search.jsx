import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await onSearch(username); // Call the parent's onSearch function
    } catch (err) {
      setError('Looks like we can\'t find the user');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: '0.5rem',
          marginRight: '0.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Search
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired, // Validate the onSearch function
};

export default Search;
