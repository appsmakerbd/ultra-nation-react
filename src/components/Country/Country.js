import React from 'react';
import './Country.css'
const Country = (props) => {
    //console.log(props.country);
    const {name,flag,population}=props.country;
    const addToList=props.addToListButtonAction;
    return (
        <div className="country-box" >
            <div className="flag">
                <img src={flag} alt={name}/>
            </div>
            <div className="detail">
                <h2>{name}</h2>
                <p>Population: {population}</p>
                <button onClick={() => addToList(props.country)}>Add in List</button>
            </div>
        </div>
    );
};

export default Country;