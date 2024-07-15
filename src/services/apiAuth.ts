import axios from 'axios';
interface LoginParams {
  username: string;
  password: string;
}

export async function login({ username, password }: LoginParams): Promise<void> {

   const { data}=await axios.post('http://localhost:3000/login', {
      username,
      password
    })

  console.log(data)
  return  data;

  //   if (response.status === 200) {
  //     console.log('Login successful');
  //   } else {
  //     console.log('Login failed');
  //   }
  // } catch (error) {
  //   console.log('Login failed', error);
  // }
}



export async function logout() {
	console.log("logout");
}