import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import DisplayTrips from "./components/DisplayTrips.js";
import DisplayTravelAgents from "./components/DisplayTravelAgents.js";
import TravelAgentDetails from "./components/TravelAgentDetails.js";
import Signup from "./components/Signup.js";
import NewReviewForm from "./components/NewReviewForm.js";

function App() {

  return (
    <div className="App">
      <UserProvider>
      <header className="App-header">
        <Nav />
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
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