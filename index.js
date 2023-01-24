//document.getElementById("count-el") . innerText = 5


//let firstBatch = 5
//let secondBatch = 7

//let count = firstBatch + secondBatch

//let myAge = 1
//let humanDogRatio = 7
//let myDogAge = myAge

//console.log (myDogAge)

//function increment() {
 //   console.log("the button was clicked");
//}


// Create a function that logs out the sum of all the lap times
//function logLapTime() {
 //   let totalTime = lap1 + lap2 + lap3
 //   console.log(totalTime)
//}

//logLapTime()


//function increment() {
 //   console.log("the button was clicked")
//}
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}