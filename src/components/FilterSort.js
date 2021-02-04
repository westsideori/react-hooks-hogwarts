import React from 'react';
import Hog from './Hog';



function FilterSort({ hogs, sortHogsByWeight, sortHogsByName, findGreasedHogs }) {

    function handleButtonClick(e) {
        if (e.target.name === 'greased') {
            findGreasedHogs();
        } else if (e.target.name === 'name') {
            sortHogsByName();
        } else if (e.target.name === 'weight') {
            sortHogsByWeight();
        }
    }

    return (
        <div style={{marginBottom: '50px'}}>
            <button name="greased" onClick={(e) => handleButtonClick(e)}>Filter By Greased</button>
            <button name="name" onClick={(e) => handleButtonClick(e)}>Sort By Name</button>
            <button name='weight' onClick={(e) => handleButtonClick(e)}>Sort By Weight</button><br />
            
        </div>
    )
}





export default FilterSort;