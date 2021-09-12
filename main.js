const bill = document.getElementById("bill")
const people = document.getElementById("people")
const reset = document.querySelector(".reset")
const rates = document.querySelectorAll(".rate")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyFive = document.getElementById("twenty-five")
const fifty = document.getElementById("fifty")
const custom = document.getElementById("custom")
const tipAmount = document.querySelector(".tip-amount")
const total = document.querySelector(".total-amount")
const error = document.querySelector(".error")
const manual = document.getElementById("manual")

five.addEventListener("click", () => {
    let tip = (5/100) * (Number(bill.value)/Number(people.value))
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
    colorChange()
})

ten.addEventListener("click", () => {
    let tip = (10/100) * (Number(bill.value)/Number(people.value))
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
})

fifteen.addEventListener("click", () => {
    let tip = (15/100) * (Number(bill.value)/Number(people.value))
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
})

twentyFive.addEventListener("click", () => {
    let tip = (25/100) * (Number(bill.value)/Number(people.value))
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
})

fifty.addEventListener("click", () => {
    let tip = (50/100) * (Number(bill.value)/Number(people.value))
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
})

function multiPeople() {
    if (people.value === "") {
        error.classList.add("show-error")
        tipAmount.innerHTML = ``
        total.innerHTML = ``
        people.style.border = "3px solid red"
        setTimeout(() => {
            error.classList.remove("show-error")
            people.style.border = "none"
        }, 1500)
    }
}

reset.addEventListener("click", () => {
    people.value = ``
    bill.value = ``
    tipAmount.innerHTML = `<h1>$0.00</h1>`
    total.innerHTML = `<h1>$0.00</h1>`
    custom.style.display = "inline"
    manual.style.display = "none"
})

function colorChange() {
    rates.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.currentTarget.style.backgroundColor = "hsl(172, 67%, 45%)"
            e.currentTarget.style.color = "hsl(183, 100%, 15%)"
            setTimeout(() => {
                item.style.backgroundColor = "hsl(183, 100%, 15%)"
                item.style.color = "white"
            }, 1000)
        })
    })
}

custom.addEventListener("click", () => {
    custom.style.display = "none"
    manual.style.display = "inline"
})

manual.addEventListener("input", () => {
    let tip = (Number(manual.value)/100) * (Number(bill.value)/2)
    tipAmount.innerHTML = `<h1>$${tip.toFixed(2)}</h1>`
    let totalBill = Number(bill.value) / Number(people.value) + tip
    total.innerHTML = `<h1>$${totalBill.toFixed(2)}</h1>`
    multiPeople()
})
