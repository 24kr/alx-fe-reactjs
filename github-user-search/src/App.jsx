import { useState } from 'react';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Results from './components/Results';
import { fetchUserData } from './services/githubService';

function App() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);

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

  return (
    <div className="App">
      <NavBar />
      <div className="p-4">
        <Search onSearch={handleSearch} />
        <Results userData={userData} error={error} />
      </div>
    </div>
  );
}

export default App;
