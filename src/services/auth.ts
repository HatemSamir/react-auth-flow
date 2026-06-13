import type { NavigateFunction } from "react-router-dom";

export function loginUser(email: string, password: string, navigate: NavigateFunction) {
  if (email === 'admin@test.com' && password === 'test@123') {
    navigate("/dashboard");
    return 'success';
  } else {    
    throw new Error('Login failed');
  }
}

export default loginUser;