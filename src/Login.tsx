// Login.tsx
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import './LoginForm.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await login({ username, password });
      navigate("/home");
    } catch (error) {
      console.log('Login failed. Please check your username and password.');
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }

    setUsername('');
    setPassword('');
  };

  return (
  <div className="login-form-container">
    <h1>Login Form</h1>
    <form onSubmit={handleSubmit} className="login-form">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="User Name"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button type="submit" disabled={isLoading}>Submit</button>
    </form>
  </div>
  );
};

export default Login;
