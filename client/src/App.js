import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Login from "./components/Login.js";
import DisplayTrips from "./components/DisplayTrips.js";
import DisplayTravelAgents from "./components/DisplayTravelAgents.js";

function App() {

  return (
    <div className="App">
      <UserProvider>
      <header className="App-header">
        <BrowserRouter>
        <Switch>
        <Nav />
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/trips" element={<DisplayTrips/>}/>
          <Route path="/travelagents" element={<DisplayTravelAgents/>}/>
        </Switch>
        </BrowserRouter>
      </header>
      </UserProvider>
    </div>
  );
}

export default App;