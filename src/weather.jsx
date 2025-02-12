import React, { useState } from 'react'
import axios from "axios"
import './Weather.css'
function weather() {

  const[city,setCity] =useState('')
  const[temperature,setTemperature] = useState('')
  const[tcity, setTcity]=useState('')
  const[humidity, setHumidity]=useState('')
  const[wind, setWind] =useState('')
  
  const checkweather =async ()=>{
      await axios.get('https://yahoo-weather5.p.rapidapi.com/weather?location=city&format=json&u=f', {
        headers: { 'x-rapidapi-key': '8bc6785024msheecc8540adc975dp1e847ejsna48afde9f3e4' }
      })
      .then((response)=>{
        setTemperature("Temperature :"+response.data.current_observation.condition.temperature+"c")
        setTcity("City :"+city)
        setHumidity("Humidity :"+response.data.current_observation.atmosphere.humidity)
      /*  setWind("Wind Speed :"+response.data.current_observation.wind.chill)*/
        setCity('')

        console.log(response.data)
      })
  }
  return (
    <>
    <div className='weather'>
      <h1>
        Weather Application
      </h1>
      <input 
      type="text"
      placeholder='Enter any City' 
      value={city}
      onChange={(e)=>setCity(e.target.value)}
      />
     <button onClick={checkweather}>Check Weather</button>
     <h1>{tcity}</h1>
     <h1>{temperature}</h1>
     <h1>{humidity}</h1>
    </div>
    </>
  )
}

export default weather
