// Home.tsx
import { useAuth } from './AuthContext';

const Home: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    // Navigate is handled in the context, so no need to navigate here
  };

  return (
    <div className="container">
      <p>This is Homepage, Welcome!</p>
      <button className="btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Home;
