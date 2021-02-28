import React from 'react';
import './SelectedCountry.css';
const SelectedCountry = (props) => {
    //console.log(props.selectedCountries[0].population);
    const countryArray=props.selectedCountries;
    // let totalPopulation=0;


    // for (let i = 0; i < countryArray.length; i++) {
    //     const population = countryArray[i].population;
    //     totalPopulation=totalPopulation+population; 
    // }
    //const variable=array.reduce((sum,currentValue)=>sum+currentValue, initialValue)
    const totalPopulation=countryArray.reduce((sum,abc)=>sum+abc.population,0);
    return (
        <div className="selected-area">
            <h1>Total Selected Countries: {props.selectedCountries.length}</h1>
            <p>Total Population {totalPopulation} </p>
            <p>Total Population</p>
        </div>
    );
};

export default SelectedCountry;