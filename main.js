//hour
const day = new Date()
const hour = day.getHours() 

//query element
const img = document.getElementById("img")
const body = document.getElementById("body")


document.getElementById("hour").innerHTML = `Agora são ${hour} horas.`

if(hour < 13 && hour >= 6){
   img.src = "image/morning.jpg"
   body.style.backgroundColor = "#e6a40b"
}else if(hour >= 13 && hour < 18){
   img.src = "image/tarde.jpg"
   body.style.backgroundColor = "#da7f08"
}else if(hour >= 18 && hour <= 23){
   img.src = "image/night.jpg"
   body.style.backgroundColor = "#313338"
}else if(hour >= 0 && hour < 6){
   img.src = "image/madruga.jpg"
   body.style.backgroundColor = "#1a7e60"
}


