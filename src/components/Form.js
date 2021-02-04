import React, { useState } from 'react';



function Form({ handleAddHog, handleAddImage }) {
    const [name, setName] = useState('')
    const [specialty, setSpecialty] = useState('')
    const [greased, setGreased] = useState(false)
    const [weight, setWeight] = useState(0)
    const [medal, setMedal] = useState('')
    const [image, setImage] = useState('')



    function handleSubmit(e) {
        e.preventDefault()
        const newHog = {
            name: name,
            specialty: specialty,
            greased: greased,
            weight: weight,
            "highest medal achieved": medal
        }
        const newImage = {} 
        newImage[name] = image
        handleAddHog(newHog)
        handleAddImage(newImage, name)

    }

    
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Hog:</h2>
            <input type='text' name='name' placeholder='Enter Hog Name' value={name} onChange={(e) => setName(e.target.value)} /> <br />
            <input type='text' name='specialty' placeholder='Enter Hog Specialty' value={specialty} onChange={(e) => setSpecialty(e.target.value)} /><br />
            <label htmlFor="greased" >Greased?</label>
            <input type='checkbox' name='greased'  value={greased} onChange={(e) => setGreased(e.target.value)} /><br />
            <label htmlFor="weight">Hog Weight</label><br />
            <input type='number' name='weight' value={weight} onChange={(e) => setWeight(e.target.value)} /><br />
            <label htmlFor="medal">Medal?</label><br />
            <input type="text" name="medal" value={medal} onChange={(e) => setMedal(e.target.value)} /><br />
            <label htmlFor="image">Hog Image</label><br />
            <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} /><br />
            <input type="submit" value='Submit Hog' /><br />
        </form>
    )
}



export default Form;