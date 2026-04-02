import React from 'react'

const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
    }

    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>


                <form onSubmit={handleSubmit}>   

                
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder='enter the email' />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" placeholder='enter the password' />
                    </div>


                    <button type="submit" className="button">Login</button>
                </form>
            </div>
        </main>
    )
}

export default Login