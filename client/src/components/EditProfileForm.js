import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { useHistory, useParams } from "react-router-dom";

function EditProfileForm () {
    const { currentUser, handleEditUser } = useContext(UserContext)
    const [errorsList, setErrorsList] = useState([])
    const { id } = useParams()
    const [newName, setNewName] = useState('')
    const [newAge, setNewAge] = useState(18)
    const [newImage, setNewImage] = useState('')
    const history = useHistory()

    useEffect(() => {
        if (currentUser){
        setNewName(currentUser.name)
        setNewAge(currentUser.age)
        setNewImage(currentUser.image)
    }
    }, [currentUser])

    function handleEditProfile(e){
        e.preventDefault()

        fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newName,
                age: newAge,
                image: newImage
             })
           })
           .then(res => {
            if(res.ok){
                res.json().then((updatedUser) => {
                    handleEditUser(updatedUser)
                    // const newStudentsArray = students.map(student => student.id === updatedStudent.id ? updatedStudent : student)
                    // setStudents(newStudentsArray)
                    history.push('/')})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    if (currentUser) {
    return (
        <div className="review-container">
            <h2>Edit Profile: </h2>
            <form onSubmit={handleEditProfile} className="review-form">
                <label>Edit Full Name: </label>
                <input className="review-input" type="text" onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="Full Name" />
                <br/>
                <label>Edit Age: </label>
                <input className="review-input" type="number" onChange={(e) => setNewAge(e.target.value)} value={newAge} placeholder="Age" />
                <br/>
                <label>Edit Image URL: </label>
                <input className="review-input" type="text" onChange={(e) => setNewImage(e.target.value)} value={newImage} placeholder="Image URL" />
                <br/>
                <button type="submit">Finish Editing Profile ✏️ </button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
    } else {
        return (
            <p>Please login or signup to view this page.</p>
        )
    }
}

export default EditProfileForm;