import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserProvider.js";
import Nav from "./components/Nav.js";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

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