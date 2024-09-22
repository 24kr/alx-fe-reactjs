import PropTypes from 'prop-types';

const Results = ({ userData, error }) => {
  if (error) {
    return <p className="text-red-500">Looks like we can not find the user</p>;
  }

  if (userData.length > 0) {
    return (
      <div className="space-y-4">
        {userData.map((user) => (
          <div key={user.id} className="border border-gray-300 p-4 rounded">
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
    );
  }

  return <p>No results found.</p>;
};

Results.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
      location: PropTypes.string,
      public_repos: PropTypes.number,
      html_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
};

export default Results;
