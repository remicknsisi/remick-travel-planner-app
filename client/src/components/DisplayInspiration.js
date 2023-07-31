import React, { useState, useContext } from "react";
import DisplayHotels from "./DisplayHotels";
import DisplayLocations from "./DisplayLocations";
import { UserContext } from "../context/UserProvider.js";
import Map from "./Map";

function DisplayInspiration() {
    const [destinationsAreHidden, setDestinationsAreHidden] = useState(false)
    const [hotelsAreHidden, setHotelsAreHidden] = useState(true)
    const [mapsAreHidden, setMapsAreHidden] = useState(true)
    const { currentUser } = useContext(UserContext)
    const [geoHeaderText, setGeoHeaderText] = useState("New York")
    const [selectedMarkers, setSelectedMarkers] = useState([
        { address: "Empire State Building", lat: 40.7484, lng: -73.9854 },
        { address: "Rockefeller Center", lat: 40.7586, lng: -73.9787 },
        { address: "Ripley's Believe it or Not!", lat: 40.7580, lng: -73.9851 },
      ])

    const newYorkMarkers = [
        { address: "Empire State Building", lat: 40.7484, lng: -73.9854 },
        { address: "Rockefeller Center", lat: 40.7586, lng: -73.9787 },
        { address: "Ripley's Believe it or Not!", lat: 40.7580, lng: -73.9851 },
      ]
    const orlandoMarkers = [
        { address: "Disney World", lat: 28.3772, lng: -81.5707 },
        { address: "Universal Studios", lat: 28.4724, lng: -81.4690 }
      ]
    const australiaMarkers = [
        { address: "Sydney Opera House", lat: -33.8568, lng: 151.2153 },
        { address: "Taronga Zoo Sydney", lat: -33.8435, lng: 151.2413 }
      ]
    const montrealMarkers = [
        { address: "Montreal Botanical Garden", lat: 45.5571, lng: -73.5556 },
        { address: "Notre-Dame Basilica of Montreal", lat: 45.5045, lng: -73.5561 }
      ]
    const amsterdamMarkers = [
        { address: "Van Gogh Museum", lat: 52.3581, lng: 4.8812 },
        { address: "Anne Frank House", lat: 52.3752, lng: 4.8840 },
        { address: "Heineken Experience", lat: 52.3578, lng: 4.8918 },
      ]
    const greeceMarkers = [
        { address: "Parthenon", lat: 37.9715, lng: 23.7267 },
        { address: "Acropolis of Athens", lat: 37.9715, lng: 23.7257 },
        { address: "Athens National Garden", lat: 37.9726, lng: 23.7374 },
      ]
    const puertoRicoMarkers = [
        { address: "Castillo San Felipe del Morro", lat: 18.4706, lng: -66.1239 },
        { address: "Playa Ocean Park", lat: 18.4530, lng: -66.0495 },
        { address: "El Yunque", lat: 18.2951, lng: -65.8000 },
        { address: "Museo de Arte de Puerto Rico", lat: 18.4483, lng: -66.0663 }
      ]
    const parisMarkers = [
        { address: "Eiffel Tower", lat: 48.8584, lng: 2.2945 }
      ]
    const berlinMarkers = [
        { address: "Berlin Wall", lat: 52.5351, lng: 13.3902 }
      ]
    const madridMarkers = [
        { address: "Plaza Mayor", lat: 40.4155, lng: -3.7074 },
        { address: "El Retiro Park", lat: 40.4153, lng: -3.6845 }
      ]
    const florenceMarkers = [
        { address: "David of Michelangelo", lat: 43.7767, lng: 11.2593 },
        { address: "Cathedral of Santa Maria del Fiore", lat: 43.7731, lng: 11.2560 }
      ]
    const cancunMarkers = [
        { address: "Playa Delfines", lat: 21.0609, lng: -86.7795 }
      ]
    const tokyoMarkers = [
        { address: "Imperial Palace", lat: 35.6852, lng: 139.7528 }
      ]
    const seoulMarkers = [
        { address: "Bukchon Hanok Village", lat: 37.5815, lng: 126.9850 }
      ]
    const copenhagenMarkers = [
        { address: "Tivoli Gardens", lat: 55.6737, lng: 12.5681 },
        { address: "Rosenborg Castle", lat: 55.6858, lng: 12.5773 }
      ]

    if (currentUser) {
    return (
        <div>
            <h1>Where will you go next?</h1>
            <button onClick={() => {
                setDestinationsAreHidden(!destinationsAreHidden)
                setHotelsAreHidden(true)
                setMapsAreHidden(true)
                }}>View Destinations</button>
            <button onClick={() => {
                setHotelsAreHidden(!hotelsAreHidden)
                setMapsAreHidden(true)
                setDestinationsAreHidden(true)}}>View Hotels</button>
            <button onClick={() => {
                setMapsAreHidden(!mapsAreHidden)
                setDestinationsAreHidden(true)
                setHotelsAreHidden(true)
                }}>Explore Activities by Geo</button>
            {destinationsAreHidden ? null : <DisplayLocations/>}
            {hotelsAreHidden ? null : <DisplayHotels/>}
            {mapsAreHidden ? null : (
                <>
                    <br/><br/>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(newYorkMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>New York</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(tokyoMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Japan</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(seoulMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>South Korea</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(copenhagenMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Copenhagen</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(cancunMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Mexico</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(florenceMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Italy</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(orlandoMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Florida</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(australiaMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Sydney</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(montrealMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Canada</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(amsterdamMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Netherlands</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(greeceMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Greece</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(puertoRicoMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Puerto Rico</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(parisMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>France</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(madridMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Spain</button>
                    <button className="geo-btn" onClick={(e) => {
                        setSelectedMarkers(berlinMarkers)
                        setGeoHeaderText(e.target.innerText)
                    }}>Germany</button>
                    <Map markers={selectedMarkers} title={geoHeaderText}/>
                </>
                )}
        </div>
    )} else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default DisplayInspiration;