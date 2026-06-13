import { useState } from "react";
import loginUser from "../services/auth";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            loginUser(email, password, navigate);
        } catch (error) {
            setError("Invalid email or password");
        }
    }

  return (

    <main>

        <div className="flex flex-col items-center text-left h-screen justify-center">
            <h2 className="mt-0 mb-0 text-2xl bold">Welcome back</h2>
            <span className="text-sm mb-10">Please enter your details</span>


            {/* login form */}
            <form onSubmit={handleLogin}>  

                {/* email input */}
                <div className="mb-3">
                    <label className="text-lg block hidden" htmlFor="email">Email</label>  
                    <div className="relative rounded-md shadow-xs">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">                        
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </div>
                        
                        
                        <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                        placeholder="Email"
                        />
                    </div>
                </div>

                {/* <div className="mb-3">
                    <label className="text-lg block" htmlFor="email">Email</label>  
                    <input  className="text-lg border-solid border-1 rounded-sm" id="email" type="email" placeholder="Email" autoComplete="email" />
                </div>  */}
                
                {/* password input */}
                <div className="mb-3">
                    <label className="text-lg block hidden" htmlFor="password">Password</label>   
                    <div className="relative rounded-md shadow-xs">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">                        
                           <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.224 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.776 0 8.774 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0 3.65-3.65M9.5 9.5l3.65 3.65" />
                            </svg>

                        </div>
                    <input 
                    id="password"  
                    placeholder="Password" 
                    type="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                    />
                    </div>
                </div>  

                <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full mt-5 cursor-pointer" type="submit">Login</button>

            </form>

            {error && <p>{error}</p>}
        </div>

    </main>

  )

}

export default LoginPage;