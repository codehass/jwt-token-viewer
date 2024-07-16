import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';


// const url: string = 'http://localhost:3000';
const url: string = 'https://hono-proxy-backend.onrender.com';

const Home = () => {
  const { isAuthenticated, isLoading, logout } = useAuth();
  const [tokenInfo, setTokenInfo] = useState(null);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      try {
        const response = await fetch(`${url}/token_info`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setTokenInfo(data.data);
        }
      } catch (error) {
        console.error('please login');
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
  };

  return (
    <div>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <h3>Your Component </h3>
      {tokenInfo ? (
        Object.keys(tokenInfo).map((key, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ fontWeight: 'bold', margin: '10px 0' }}>{key}</div> : {tokenInfo[key]}
          </div>
        ))
      ) : (
        <div>No token info available</div>
      )}
    </div>
  );
};

export default Home;