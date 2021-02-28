import React from 'react';
import './Country.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
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
                <Button onClick={() => addToList(props.country)} variant="danger">Add in List</Button>
            </div>
        </div>
    );
};

export default Country;