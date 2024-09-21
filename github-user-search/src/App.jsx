import { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Results from './components/Results';
import { fetchGitHubUser } from './services/githubService'; // Import the service

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  // Make sure fetchGitHubUser is used when the user searches
  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username); // Use the function here
      setUserData(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('User not found');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <SearchBar onSearch={handleSearch} /> {/* Pass the search function */}
        <Results userData={userData} error={error} />
      </div>
    </div>
  );
}

export default App;
