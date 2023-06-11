import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.js";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const history = useHistory()

    const { login } = useContext(UserContext)
  
    function handleSubmit(e) {
      e.preventDefault()
      const user = {
        username,
        password
      }

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then(res => {
            if(res.ok){
                res.json().then((user) => {
                    login(user)
                    setUsername('')
                    setPassword('')
                    setError('')
                    history.push('/')})
            } else {
                res.json().then((user) => setError(user.error.login))
            }
        })
    }
  
    return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className="login-form">
        Username: 
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login-input'
        />
        <br/>
        Password: 
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-input'
        />
        {Boolean(error) ? <p className="error-message">**{error}**</p> : null}
        <button type="submit">Login</button>
        <p className='signup-prompt'>Don't have an account? <Link to={`/signup`}>Sign up</Link></p>
      </form>
    </div>
    );
  }

export default Login;