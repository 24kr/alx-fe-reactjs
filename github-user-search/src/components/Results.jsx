import PropTypes from 'prop-types'; // Import PropTypes

const Results = ({ userData, error }) => {
  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (userData) {
    return (
      <div style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '4px' }}>
        <h2>{userData.login}</h2>
        <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} width="100" />
        <p>{userData.bio || 'No bio available'}</p>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>
    );
  }

  return null;
};

// Define PropTypes for validation
Results.propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string,
    html_url: PropTypes.string.isRequired,
  }), // userData is expected to be an object (shape) with certain properties
  error: PropTypes.string, // error is a string
};

export default Results;
