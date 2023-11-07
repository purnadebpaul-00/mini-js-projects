const form = document.querySelector("form")

form.addEventListener("submit", function (i) {
    i.preventDefault();
    const height = parseFloat(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#results")
    if(height === "" || height <= 0 || isNaN(height)){
        result.innerHTML = "Please Enter Valid Height"
    }
    else if(weight === "" || weight <= 0 || isNaN(weight)){
        result.innerHTML = "Please Enter Valid weight"
    }
    else{
        const bmi = (weight/(height*height)).toFixed(1)
        if (bmi < 18.6) {
            result.innerHTML = `${bmi} <br> Under Weight`
        }
        else if(bmi >= 18.6 && bmi < 24.9) {
            result.innerHTML = `${bmi} <br> Normal Range`
        }
        else if(bmi >= 24.9) {
            result.innerHTML = `${bmi} <br> Overweight`
        }
    }

})