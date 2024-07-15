import  { FormEvent,useState } from "react";
import { login } from "./services/apiAuth";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event:FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    // setError('');

    try {
      const data = await login({ username, password });
      console.log('Received data:', data);
    } catch (error) {
      console.log('Login failed. Please check your username and password.');
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false);
    }

		setUsername('');
		setPassword('')
	}

	return (
		<div>
			<h1>Login Form</h1>
			<form onSubmit={handleSubmit}>
				<div>
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
				<div>
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
}

export default Login;
