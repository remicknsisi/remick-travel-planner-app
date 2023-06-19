import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
    const history = useHistory()


    return (
        <div className="home">
            <div className="welcome">
                <h2>Welcome to Vacation Planner!</h2>
                Click below or <Link to={`/signup`}>sign up</Link> to get started.
                <br/>
                <br/>
                <button className="button" onClick={() => history.push('/trips/new')}>Get Started 🌴</button>
            </div>
        </div>
    );
}

export default Home;