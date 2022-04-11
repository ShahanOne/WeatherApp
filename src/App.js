import React from 'react';
import { ReactDOM, useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = React.useState("")
  const [city, setCity] = React.useState("")
  
  function handleClick() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=3255931fb38bee684d91ed868832f112")
    .then(response=> response.json())
    .then(data=>setData(data))
  
  }
  function handleChange(e){
    const {name, value} = e.target;
  
    setCity(value)
  }

var icon = data? "https://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png": "" ; 

  return <div>
  { !data? 
  <center> <div className='container-fluid search-page-main'>
  <h2 className='weather-heading'>Weather</h2>
  <div class="input-group mb-3 city-name">
  <input className='form-control' placeholder='Search a city or country' autoComplete='none' onChange={handleChange} value={city} aria-describedby="button"/>
  <span class="input-group-text btn btn-dark" id="button" type="button"  onClick={handleClick}>Search</span>
</div>

 </div> </center>
 : 
 <div className='weather-page-main'>
     <h1>The temperature in {data.name} is {data.main.temp}° C </h1>
     <h1>The Weather condition is {data.weather[0].description}</h1>
     <img src={icon}/>
     <a href="/" ><button className='btn btn-light'>Go Back</button></a>
     </div>
    }
</div>
}

export default App;
