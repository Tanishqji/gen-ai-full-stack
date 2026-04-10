import axios from 'axios';

export async function registerUser({ username, email, password }) {

    
    try{
    
    const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
    },
    { withCredentials: true
    })

    return response.data;
}
catch(error){
    console.error("Registration error:", error);
    throw error;
}
}

export async function loginUser({ email, password }) {
    try{
   const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
    },
    { withCredentials: true
    })

    return response.data;
}
catch(error){
    console.error("Login error:", error);
    throw error;
}
}

export async function logoutUser() {

    try{
    const response = await axios.post('http://localhost:5000/api/auth/logout', 
     { withCredentials: true });

    return response.data;

    }catch(error){
    console.error("Logout error:", error);
    throw error;
    }

}

export async function getMe() {
    try{
  const response = await axios.get('http://localhost:5000/api/auth/get-me',{
        withCredentials: true
  });
  return response.data;

  
    }catch(error){
    console.error("GetMe error:", error);
    throw error;
    }
}
