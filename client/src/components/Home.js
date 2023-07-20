import React from "react";
import { Link, useHistory } from "react-router-dom";

function Home() {
    const history = useHistory()

    return (
        <div className="home">
            <div className="welcome">
                <h2>Welcome to Remick Vacations Planner!</h2>
                Utilize this SPA to book pre-packaged vacations with our experienced agents, or build out special offers when you sign up as a travel agent.
                <br/><br/>
                Click below or <Link to={`/signup`}>sign up</Link> to get started.
                <br/>
                <br/>
                <button className="button" onClick={() => history.push('/inspiration')}>Get Started 🌴</button>
                <br/><br/>
                <img className="home-img" src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"/><img className="home-img" src="https://images.unsplash.com/photo-1597667554307-885851e705c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"/><img className="home-img" src="https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80"/><img className="home-img" src="https://images.unsplash.com/photo-1548957175-84f0f9af659e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2082&q=80"/>
            </div>
        </div>
    )
} 

export default Home;