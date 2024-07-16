import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext'; // Adjust the import as necessary

const Home = () => {
const { isAuthenticated, isLoading,logout } = useAuth();
const [tokenInfo, setTokenInfo] = useState(null);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const response = await fetch('http://localhost:3000/token_info', {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setTokenInfo(data.data); 
      } catch (error) {
        console.error('Error fetching token info:', error);
      }
    };

    if (isAuthenticated && !isLoading) {
      fetchTokenInfo();
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

    const handleLogout = async () => {
    await logout();
    // Navigate is handled in the context, so no need to navigate here
  };

  return (
    <div>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <h1>Your Component</h1>
      {tokenInfo ? (
        <div>{JSON.stringify(tokenInfo)}</div>
      ) : (
        <div>No token info available</div>
      )}
    </div>
  );
};

export default Home;
