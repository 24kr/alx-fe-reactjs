import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = React.useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Search GitHub username"
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
        onClick={handleSearch}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Search
      </button>
    </div>
  );
};

// Define PropTypes to validate the props
SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch is required and should be a function
};

export default SearchBar;
