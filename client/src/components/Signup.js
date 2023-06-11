import React, { useState, useContext } from 'react';
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider.js";

function Signup (){
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(UserContext)

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()

        fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                age,
                email,
                image,
                username,
                password,
                password_confirmation
            })
        })
        .then(res => {
            if(res.ok){
                res.json().then((newUser) => {
                    signup(newUser)
                    history.push('/')
                })
            } else {
                res.json().then((newUser) => {
                    setUsername('')
                    setPassword('')
                    setPasswordConfirmation('')
                    setName('')
                    setEmail('')
                    setAge('')
                    setImage('')
                    const errorLis = newUser.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className='signup-container'>
            <h1 className="signup-header">Sign Up Below</h1>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>Name: </label>
                <input
                type="text"
                placeholder="E.g. Bob Ross"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='signup-input'/>
                <br/>
                <label>Age: </label>
                <input
                type="text"
                placeholder="E.g. 35"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className='signup-input'/>
                <br/>
                <label>Email: </label>
                <input
                type="text"
                placeholder="E.g. bobross@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='signup-input'/>
                <br/>
                <label>Image: </label>
                <input
                type="text"
                placeholder="Image URL here"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='signup-input'/>
                <br/>
                <br/>
                <label>Username: </label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='signup-input'/>
                <br/>
                <label>Password: </label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='signup-input'/>
                <br/>
                <label>Confirm Password: </label>
                <input
                type="password"
                value={password_confirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className='signup-input'/>
                <br/>
                <button type="submit">Sign Up</button>
                <p className="error-message">{errorsList}</p>
                <p className='login-prompt'>Already have an account? <Link to={`/login`}>Login</Link></p>
            </form>
        </div>
    )
}

export default Signup;