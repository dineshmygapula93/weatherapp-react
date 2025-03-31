import React, { useState } from 'react'
import axios from "axios"
import './Weather.css'
export default function Weather() {

  const[city,setCity] =useState('')
  const[temperature,setTemperature] = useState('')
  const[tcity, setTcity]=useState('')
  const[humidity, setHumidity]=useState('')
  const[wind, setWind] =useState('')
  const[description,setDescription] =useState('')
    
     
         const checkweather =async ()=>{
              try {
                  await axios.get(`https://open-weather13.p.rapidapi.com/city/${city}/EN`, {
                    method: "GET",
                    headers: { 'x-rapidapi-key': import.meta.env.VITE_REACT_APP_KEY,
                      'x-rapidapi-host' :'open-weather13.p.rapidapi.com'
                    }
                  })
                  .then((response)=>{
                    setTemperature("Temperature :"+(Math.round(((response.data.main.temp)-32)*5/9)*10)/10+" c")
                    setTcity("City :"+city)
                    setHumidity("Humidity :"+(response.data.main.humidity))
                  /*  setWind("Wind Speed :"+response.data.current_observation.wind.chill)*/
                    setWind("Wind :"+(response.data.wind.speed))
                    setDescription("Description :"+response.data.weather[0].description)
                    setCity('')
                    console.log(response.data)
                  })
                  } catch (error) {
              
                  }
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

     <div className='res'>
     <h1>{tcity}</h1>
     <h1>{temperature}</h1>
     <h1>{humidity}</h1>
     <h1>{wind}</h1>
     <h1>{description}</h1>
     </div>
      </div>
    </>
  )
}