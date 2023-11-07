const clock = document.querySelector("#clock")



setInterval(function(params) {
    let time = new Date;
    clock.innerHTML = time.toLocaleTimeString()
},1000)