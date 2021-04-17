let currentCount = parseInt(document.getElementById("counter").innerHTML, 10)

function count(num = 1) {
  currentCount = currentCount + num
  document.getElementById("counter").innerHTML = currentCount
}

function addTime() {
  count()
}

function subTime() {
  count(-1)
}

function startTime() {
  countingInt = window.setInterval(count, 3000)
}


function pauseOrResume() {
  if (document.getElementById("pause").innerText == "pause") {
    document.getElementById("pause").innerText = "resume"
    window.clearInterval(countingInt)
    console.log("pausing")
    removeClicks()
  } else {
    document.getElementById("pause").innerText = "pause"
    startTime()
    console.log("resuming") 
    addClicks()
  }
}

function heartNumber() {
  const likes = document.getElementsByClassName("likes")[0]
  const li = document.createElement("li")
  li.innerText = `I love the number ${currentCount}`
  likes.append(li)
}

function comment() {
  console.log("This is my comment")
}

countingInt = window.setInterval(count, 2000)
addClicks()

document.getElementById("pause").addEventListener("click", pauseOrResume)

function addClicks() {
  document.getElementById("minus").addEventListener("click", subTime)
  document.getElementById("plus").addEventListener("click", addTime)
  document.getElementById("heart").addEventListener("click", heartNumber)
}
function removeClicks() {
  document.getElementById("minus").removeEventListener("click", subTime)
  document.getElementById("plus").removeEventListener("click", addTime)
  document.getElementById("heart").removeEventListener("click", heartNumber)
}
