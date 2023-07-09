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
    const userUpdatedReviews = [...currentUser.reviews, newReview]
    const updatedUser = {...currentUser, reviews: userUpdatedReviews}
    setCurrentUser(updatedUser)
  }

  function handleDeleteReview(deletedReview){
    const userUpdatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const updatedUser = {...currentUser, reviews: userUpdatedReviews}
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

  function handleBookTrip(newBooking, trip){
    const userUpdatedBookings = [...currentUser.bookings, newBooking]
    const userUpdatedTrips = [...currentUser.trips, trip]
    const userWithUpdatedBookingsAndTrips = {...currentUser, bookings: userUpdatedBookings, trips: userUpdatedTrips}
    setCurrentUser(userWithUpdatedBookingsAndTrips)
  }

  function handleDeleteBooking(deletedBooking, trip){
    const userUpdatedBookings = currentUser.bookings.filter(b => b.id !== deletedBooking.id)
    const userUpdatedTrips = currentUser.trips.filter(t => t.id !== trip.id)
    const userWithUpdatedBookingsAndTrips = {...currentUser, bookings: userUpdatedBookings, trips: userUpdatedTrips}
    setCurrentUser(userWithUpdatedBookingsAndTrips)
  }

  function handleSubmitTrip(newTrip){
    console.log('creating trip!')
  }

  return (
    <UserContext.Provider value={{currentUser, login, logout, signup, handleSubmitReview, handleDeleteAccount, handleEditUser, handleDeleteReview, handleBookTrip, handleDeleteBooking, handleSubmitTrip}}>
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }