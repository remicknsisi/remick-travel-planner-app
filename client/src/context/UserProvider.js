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
  const signup = (newUser) => {setCurrentUser(newUser)}

  function handleSubmitReview (newReview){
    // const userUpdatedReviews = [...currentUser.reviews, newReview]
    const updatedUser = {...currentUser, reviews: [...currentUser.reviews, newReview]}
    setCurrentUser(updatedUser)
  }

  function handleDeleteAccount(){
    fetch(`/users/${currentUser.id}`, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}})
      .then(() => {
        history.push(`/login`)
        setCurrentUser(null)
        })
  }

  function handleEditUser(updatedUser){
    setCurrentUser(updatedUser)
  }

  function handleDeleteReview(deletedReview){
    const userUpdatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const updatedUser = {...currentUser, reviews: userUpdatedReviews}
    setCurrentUser(updatedUser)
  }

  return (
    <UserContext.Provider value={{currentUser, login, logout, signup, handleSubmitReview, handleDeleteAccount, handleEditUser, handleDeleteReview}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }