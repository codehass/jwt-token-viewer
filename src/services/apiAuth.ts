interface LoginParams {
  username: string;
  password: string;
}

export async function login({ username, password }: LoginParams): Promise<number> {

  const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        }),
      });

  return  response.status;
}

export async function logout() {
    const response = await fetch("http://localhost:3000/logout", {
      method: "GET",
      // credentials: "include",
    });

    return response;
  }