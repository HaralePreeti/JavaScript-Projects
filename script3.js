async function search(){ 
    var city=document.querySelector(".searchInput") 
    var apiURL="https://api.openweather-map.org/data/2.5/weather?q="+city.value+"&ap-pid=ca74834dac53d7f674bfe4854c6ff83d"; 
    console.log(apiURL) 
    var raw=await fetch(apiURL) 
    var data=await raw.json() 
    console.log(data) 
    if(data){ 
        if(data.message=='City not found'){ 
            alert(data.message) 
            document.querySelector(".temp").innerHTML="°c"; 
            document.querySelector(".city").innerHTML=data.name; 
            document.querySelector(".h").innerHTML=data.main.humidity+" %"; 
            document.querySelector(".w").innerHTML=data.main.wind.speed+" km/hr"; 
        }
        else{ 
            document.querySelector(".temp").innerHTML=(data.main.temp-273.15).toFixed(2)+"°c"; 
            document.querySelector(".city").innerHTML=data.name; 
            document.querySelector(".h").innerHTML=data.main.humidity+" %"; 
            document.querySelector(".w").innerHTML=data.main.wind.speed+" km/hr"; 
        } 
    } 
}