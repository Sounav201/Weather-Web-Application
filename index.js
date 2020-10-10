//Initialising the API
const api = {   
    key: "e33bef86e20fe8f6e02040b8d81235b8",
    base: "https://api.openweathermap.org/data/2.5/"   
}

const searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress' ,setQuery ); 


function setQuery(e){
    if(e.keyCode== 13)
  {  getResults(searchbox.value)
    //console.log(searchbox.value);
}

}
 //Fetching the Weather Details from the API
function getResults(query)
{  
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)  //retrieving the weather data
    .then(weather => {
        return weather.json();                                            //converting it into a JSON file

    }).then(DisplayResults);

}
 //Printing the Weather
function DisplayResults(weather ) {
    console.log(weather);
    let city=document.querySelector('.location .city');
    city.innerText=`${weather.name} , ${weather.sys.country}`;

    let now=new Date();
    let date=document.querySelector('.location .date');
    date.innerText=dateBuilder(now);                                    //Styling the date.
    
    //date.innerText=new Date().toLocaleDateString();

    let temp=document.querySelector('.current .temp');
    temp.innerHTML=`${Math.round(weather.main.temp)}<span>°C</span>`;


    let weather_ele=document.querySelector('.current .weather');
    let weather_icon=document.querySelector('.current .weather .icon');
   // let tempvariable=weather.weather[0].icon;
    //console.log(tempvariable);
    //document.getElementsByClassName('icon').src=URL.createObjectURL(weather_icon);
    //let tempurl="http://openweathermap.org/img/w/"+ tempvariable + ".png";
    //document.getElementById('#wicon').setAttribute('src',tempurl);

    weather_ele.innerText=weather.weather[0].main;
    if(weather.weather[0].main==="Rain")
   { document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
    console.log("Rain image  deployed.")};

    if(weather.weather[0].main==="Clouds")
    { document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1542315426-2db062a5a3f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
     console.log("Clouds image  deployed.")};
     
     if(weather.weather[0].main==="Haze")
     { document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1524797233719-f163ad0b5165?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
      console.log("Haze image  deployed.")};

     
     if(weather.weather[0].main==="Clear")
      { document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1541898153-89683fcd5cc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')";
       console.log("Clear sky image  deployed.")}; 
       
    if(weather.weather[0].main==="Thunderstorm")
    {document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1584269655525-c2ec535de1d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')" ;    
    console.log("Thunderstorm image deployed")};
    

    let hilow=document.querySelector('.hi-low');
    hilow.innerText=`${Math.round(weather.main.temp_min)}°C  / ${Math.round(weather.main.temp_max)}°C`;

    let humidity=document.querySelector('.humidity');
    humidity.innerHTML=`Humidity ${Math.round(weather.main.humidity)}<span>%</span>`;

    let feels=document.querySelector('.feels-like');
    feels.innerText=`Feels like ${Math.round(weather.main.feels_like)}°C`;

}

//Building a date & day format
function dateBuilder(d){           
    let months=["January" , "February", "March", "April" ,"May" , "June" , "July" , "August" , "September" ,"October" , "November" , "December"];
    let days=["Sunday" ,"Monday" , "Tuesday" , "Wednesday", "Thursday" ,"Friday" , "Saturday"];

    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`;


}


