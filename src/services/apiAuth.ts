interface LoginParams {
  username: string;
  password: string;
}

const url:string = 'https://master.dbzjdeaojpr79.amplifyapp.com';

export async function login({ username, password }: LoginParams): Promise<number> {

  const response = await fetch(`${url}/login`, {
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
    const response = await fetch(`${url}/logout`, {
      method: "GET",
      // credentials: "include",
    });

    return response;
  }