import React from 'react';
import Hog from './Hog.js'



function HogList({hogs, pigImages}) {

    const hogTiles = hogs.map((hog) => {
        return <Hog 
            key={hog.name}
            name={hog.name}
            specialty={hog.specialty}
            greased={hog.greased}
            weight={hog.weight}
            medalAchieved={hog['highest medal achieved']}
            pigImages={pigImages}
         />
        })

    return (
        <div className="ui grid container">
            {hogTiles}
       </div>
    )
}



export default HogList;