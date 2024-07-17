import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import './TokenInfo.css';


const url: string = 'http://localhost:3000';
// const url: string = 'https://hono-proxy-backend.onrender.com';
// const url: string = 'https://master.dbzjdeaojpr79.amplifyapp.com';

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
    return <div className="loading">Loading...</div>;
  }

  const handleLogout = async () => {
    await logout();
  };

  return (
  <div className="token-info-container">
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
      <h3>JWT Info</h3>
      {tokenInfo ? (
        Object.keys(tokenInfo).map((key, index) => (
          <div key={index} className="token-info-item">
            <div className="token-info-key">{key}</div> : {tokenInfo[key]}
          </div>
        ))
      ) : (
        <div>No token info available</div>
      )}
    </div>
  );
};

export default Home;