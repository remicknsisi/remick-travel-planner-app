import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import DisplayTrips from "./components/DisplayTrips.js";
import DisplayTravelAgents from "./components/DisplayTravelAgents.js";
import TravelAgentDetails from "./components/TravelAgentDetails.js";
import Signup from "./components/Signup.js";
import NewReviewForm from "./components/NewReviewForm.js";
import TripDetails from "./components/TripDetails.js";
import UserDetails from "./components/UserDetails.js";

function App() {
  const history = useHistory()


  return (
    <div className="App">
      <UserProvider>
      <header className="App-header">
        <h1 onClick={() => history.push('/')}>Remick Vacations</h1>
        <Nav />
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Route exact path="/users/:id">
            <UserDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/travelagents/:id/reviews/new">
            <NewReviewForm/>
          </Route>
          <Route exact path="/trips">
            <DisplayTrips/>
          </Route>
          <Route exact path="/trips/:id">
            <TripDetails/>
          </Route>
          <Route exact path="/travelagents">
            <DisplayTravelAgents/>
          </Route>
          <Route exact path="/travelagents/:id">
            <TravelAgentDetails/>
          </Route>
        </Switch>
      </header>
      </UserProvider>
    </div>
  );
}

export default App;