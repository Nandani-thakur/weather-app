const apiKey="ad0cec02f41605c838d81800b0d9db28";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weathericon=document.querySelector(".weather_icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{
        var data = await response.json();
    
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".tamp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind_speed").innerHTML=data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weathericon.src="https://img.icons8.com/?size=100&id=J67ds0G0ua3a&format=png&color=000000"
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="https://img.icons8.com/?size=100&id=njmmGrhoNFDl&format=png&color=000000"
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="https://img.icons8.com/?size=100&id=15360&format=png&color=000000"
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="https://img.icons8.com/?size=100&id=15360&format=png&color=000000"
    }
   else if(data.weather[0].main=="Mist"){
        weathericon.src="https://img.icons8.com/?size=100&id=0njqrGYW1zC4&format=png&color=000000"
    }
    else if(data.weather[0].main=="Snow"){
        weathericon.src="https://img.icons8.com/?size=100&id=cyZConbteZk9&format=png&color=000000";
    }

document.querySelector(".weather").style.display="block";
document.querySelector(".error").style.display="none";

    }
    
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
