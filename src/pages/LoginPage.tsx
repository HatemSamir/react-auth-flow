function LoginPage() {

  return (

    <div>

      <h1>Login</h1>

        <div>
            <label htmlFor="email">Email</label>  
            <input  id="email" type="email" placeholder="Email" />
        </div> 

        <div>
            <label htmlFor="password">Password</label>   
            <input id="password" type="password" placeholder="Password" />
        </div>  

      <button>Login</button>

    </div>

  )

}

export default LoginPage;