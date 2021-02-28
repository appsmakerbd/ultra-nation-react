import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import SelectedCountry from './components/Country/SelectedCountry/SelectedCountry';

function App() {
  const [countries, setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[])
 
  const [filterCountry,setFilterCountry]=useState([]);
  const addToList=(theData)=>{
    const newValue=[...filterCountry,theData];
    setFilterCountry(newValue)
  }

  
  
  return (
    <div className="App">
      <h1>TOtal Countries {countries.length}</h1>
      <SelectedCountry selectedCountries={filterCountry}></SelectedCountry>
      <ul>
        {
          countries.map(country => <Country country={country} addToListButtonAction={addToList} key={country.alpha3Code}></Country>)
        }
      </ul>
      
      <hr/>
      
    </div>
  );
}

export default App;
