import { useState } from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Results from './components/Results';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    try {
      const data = await fetchUserData(username); // Fetch user data
      setUserData(data);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError('Looks like we can\'t find the user');
      setUserData(null);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <Search onSearch={handleSearch} /> {/* Pass handleSearch to Search component */}
        <Results userData={userData} error={error} />
      </div>
    </div>
  );
}

export default App;
