import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

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
    <UserContext.Provider value={{currentUser, login, logout}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }