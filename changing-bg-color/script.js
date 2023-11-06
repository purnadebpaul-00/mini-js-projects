const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach((btn)=>{
    btn.addEventListener("click", (i)=>{
        if(i.target.id === "grey"){
            body.style.backgroundColor = i.target.id
            body.style.color = "#fff"
        }
        if(i.target.id === "white"){
            body.style.backgroundColor = i.target.id
            body.style.color = "black"
        }
        if(i.target.id === "blue"){
            body.style.backgroundColor = i.target.id
            body.style.color = "white"
        }
        if(i.target.id === "yellow"){
            body.style.backgroundColor = i.target.id
            body.style.color = "black"
        }
        if(i.target.id === "black"){
            body.style.backgroundColor = i.target.id
            body.style.color = "white"
        }
        if(i.target.id === "purple"){
            body.style.backgroundColor = i.target.id
            body.style.color = "white"
        }
    })
});