import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
    const history = useHistory()


  return (
    <div className="home">
        <div className="home-text">
            Welcome to Vacation Planner!
            <br/>
            Click below or <Link to={`/signup`}>sign up</Link> to get started.
            <br/>
            <button className="button" onClick={() => history.push('/trips/new')}>Get Started 🌴</button>
        </div>
    </div>
  );
}

export default Home;