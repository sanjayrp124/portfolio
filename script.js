

var bars = document.querySelector("button.button");

bars.addEventListener("click",function(){
    document.querySelector("div.sideitem-div").classList.toggle("visible");
})


var date = new Date();

document.getElementById('date-time').innerHTML = date;