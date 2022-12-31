const options = { 
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cd9509eb10msh10599f82e982c91p1dfeeejsn04053bb9a6a1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
   cityName.innerHTML=city

   var status=0

   fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
   .then(response => {
      status=response.status;
      return response.json()
   })
   .then((response) =>{ 
         
      if(status==400)
      {
         temp2.innerHTML="DATA NOT FOUND"
         temp.innerHTML="DATA NOT FOUND"
         feels_like.innerHTML="DATA NOT FOUND"
         humidity2.innerHTML="DATA NOT FOUND"
         humidity.innerHTML="DATA NOT FOUND"
         min_temp.innerHTML="DATA NOT FOUND"
         max_temp.innerHTML="DATA NOT FOUND"
         wind_speed2.innerHTML="DATA NOT FOUND"
         wind_speed.innerHTML="DATA NOT FOUND"
         wind_degrees.innerHTML="DATA NOT FOUND"
         sunrise.innerHTML="DATA NOT FOUND"
         sunset.innerHTML="DATA NOT FOUND" 

      }
      else if(status==200){
         temp2.innerHTML=response.temp=="undefined"? "DATA NOT FOUND" : response.temp
         temp.innerHTML=response.temp=="undefined"? "DATA NOT FOUND" : response.temp
         feels_like.innerHTML=response.feels_like =="undefined"? "DATA NOT FOUND" : response.feels_like
         humidity2.innerHTML=response.humidity=="undefined"? "DATA NOT FOUND": response.humidity
         humidity.innerHTML=response.humidity=="undefined"?  "DATA NOT FOUND": response.humidity
         min_temp.innerHTML=response.min_temp =="undefined"?  "DATA NOT FOUND": response.min_temp
         max_temp.innerHTML=response.max_temp =="undefined"?  "DATA NOT FOUND" :response.max_temp
         wind_speed2.innerHTML=response.wind_speed=="undefined"? "DATA NOT FOUND" : response.wind_speed
         wind_speed.innerHTML=response.wind_speed=="undefined"? "DATA NOT FOUND" : response.wind_speed
         wind_degrees.innerHTML=response.wind_degrees=="undefined"?  "DATA NOT FOUND" :response.wind_degrees
         sunrise.innerHTML=response.sunrise=="undefined"? "DATA NOT FOUND" : response.sunrise
         sunset.innerHTML=response.sunset =="undefined"?  "DATA NOT FOUND" : response.sunset
      }
      else{
         temp2.innerHTML="Server error"
         temp.innerHTML="Server error"
         feels_like.innerHTML="Server error"
         humidity2.innerHTML="Server error"
         humidity.innerHTML="Server error"
         min_temp.innerHTML="Server error"
         max_temp.innerHTML="Server error"
         wind_speed2.innerHTML="Server error"
         wind_speed.innerHTML="Server error"
         wind_degrees.innerHTML="Server error"
         sunrise.innerHTML="Server error"
         sunset.innerHTML="Server error" 
      }
   })
   .catch(err =>{ 
      console.error(err)

   });
}
submit.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log("I am here");
   getWeather(cityInput.value)
})

delhi.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log("I am here");
   getWeather("Delhi")
})

durgapur.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log("I am here");
   getWeather("Durgapur")
})

australia.addEventListener("click",(e)=>{
   e.preventDefault()
   // console.log("I am here");
   getWeather("Australia")
})

getWeather("Delhi")