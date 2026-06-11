function LoginPage() {

  return (

    <main>

      <h1>Login</h1>
        
        <form action="">

            <div>
                <label htmlFor="email">Email</label>  
                <input  id="email" type="email" placeholder="Email" />
            </div> 

            <div>
                <label htmlFor="password">Password</label>   
                <input id="password" type="password" placeholder="Password" />
            </div>  

            <button type="submit">Login</button>

        </form>

    </main>

  )

}

export default LoginPage;