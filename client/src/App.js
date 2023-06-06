import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Nav />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/trips" element={<DisplayTrips/>}/>
          <Route path="/travelagents" element={<DisplayTravelAgents/>}/>
        </Routes>
      </header>
      </UserProvider>
    </div>
  );
}

export default App;