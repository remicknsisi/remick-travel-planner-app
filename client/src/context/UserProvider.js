import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
    .then((res) => {
    if (res.ok) {
      res.json().then((user) => setCurrentUser(user))
    }})
  }, [])

  const login = (user) => {setCurrentUser(user)}
  const logout = () => {setCurrentUser(null)}
//   const signup = (newUser) => {setCurrentUser(newUser)}

  return (
    <StudentContext.Provider value={{currentUser, login, logout, signup}}>
      {children}
    </StudentContext.Provider>
  )
}

export { UserProvider, UserContext }