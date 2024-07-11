interface LoginParams {
	username: string;
	password: string;
}

export async function login({
	username,
	password,
}: LoginParams): Promise<void> {
	console.log("Username:", username);
	console.log("Password:", password);
}

export async function logout() {
	console.log("logout");
}
