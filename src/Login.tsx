import React, { useState } from "react";
import { login } from "./services/apiAuth";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		login({ username, password });
		setUsername("");
		setPassword("");
	};

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
						//disabled={isLoading}
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
						//disabled={isLoading}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Login;
