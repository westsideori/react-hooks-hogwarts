import React, { useState } from 'react';
import truffle_shuffle from "../assets/truffle_shuffle.jpg";


function Hog({ name, specialty, greased, weight, medalAchieved, pigImages }) {
    
    const [isFlipped, setIsFlipped] = useState(false)
    const [isHidden, setIsHidden] = useState(false);

    // const {name, specialty, greased, weight, "highest medal achieved":medalAchieved} = hog

    const handleHogClick = () => {
        setIsFlipped((isFlipped) => !isFlipped)
    }

    const handleHiddenClick = () => {
        setIsHidden((isHidden) => !isHidden)
    }
    
    const renderHog = () => {
        if (!isFlipped) {
            return (
                <div style={{marginTop: '25px'}} onClick={handleHogClick} className="ui eight wide column">
                    <h2>{name}</h2>
                    <img style={{height: '100px' }} alt={name} src={pigImages[name]}></img>
                    
                </div>
            )
        } else if (isFlipped){
            return (
                <div onClick={handleHogClick} className="ui eight wide column">
                    <h3>{specialty}</h3>
                    <h6>{weight}</h6>
                    {greased ? <p>Greased</p> : <p>Ungreased</p>}
                    <p>Highest Medal Achieved: {medalAchieved}</p>
                    
                </div>
            )
        }
        
    }

    return (
        <div>
          {isHidden ? null : renderHog()}
          <button onClick={handleHiddenClick}>{ isHidden ? "Show Hog" : "Hide Hog" }</button>
        </div>

    )

}



export default Hog;