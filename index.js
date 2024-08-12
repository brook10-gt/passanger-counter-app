// document.getElementById("count").innerText = 5

//let firstBatch = 5
//let secondBatch = 7

//let count = firstBatch + secondBatch  // count is a variable 

//console.log(count) //allows us to check if the count is actually zero its kind of like print in python

let countEl = document.getElementById("count-el")

let countDash = document.getElementById("save-el")

console.log(countDash)

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    countDash.textContent += "" +count +" - "
    countEl.textContent = 0
    count = 0
}

    
