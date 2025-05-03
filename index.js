async function getWeather(){
    const city = document.getElementById('city').value ;
    const api= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=880c83467f958b961bfa346d879a7e17&units=metric`;

    const response = await fetch(api);
    var data  = await response.json();
    // console.log(data);

 



    document.getElementById('place_name').innerText = data.name ;
    document.getElementById('tempareture').innerText = data.main.temp + "°C" ;
    // document.getElementById('Weather').innerText = data.name ;
    document.getElementById('humidity').innerText = data.main.humidity + " %";
    document.getElementById('pressure').innerText = data.main.pressure ;
    document.getElementById('wind_speed').innerText = data.wind.speed + " km/h" ; 

    if(data.weather[0].main == "Clouds"){
        document.getElementById('weather_icon').src = "assets/clouds.png" ;
    }
    else if(data.weather[0].main == "Clear"){
        document.getElementById('weather_icon').src = "assets/clear.png" ;
    }
    else if(data.weather[0].main == "Rain"){
        document.getElementById('weather_icon').src = "assets/rain.png" ;
    }
    else if(data.weather[0].main == "Mist"){
        document.getElementById('weather_icon').src = "assets/mist.png" ;
    }
    else if(data.weather[0].main == "Snow"){
        document.getElementById('weather_icon').src = "assets/snow.png" ;
    }
    else{
        document.getElementById('weather_icon').src = "assets/clear.png" ;
    }

}

// getWeather();