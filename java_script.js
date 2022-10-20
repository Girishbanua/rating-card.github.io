const rateContainer = document.querySelector(".rate-container")
const thankyouContainer = document.querySelector(".thankyou-container")
const submitButton = document.getElementById("submit")
const ratings = document.getElementById("rating")
const rateButton = document.querySelectorAll(".rate-btn")

submitButton.addEventListener("click", () => {    
    thankyouContainer.style.display = "block"
    rateContainer.style.display = "none"
})

rateButton.forEach((rate) => {
    rate.addEventListener("click", () => {
        ratings.innerHTML = rate.innerHTML
    })
})



