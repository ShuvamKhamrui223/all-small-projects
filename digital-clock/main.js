const timeEl = document.querySelector(".time")
const dateEl = document.querySelector(".date")
const msgEl = document.querySelector(".msg")

window.addEventListener("DOMContentLoaded", updateTime)

function updateTime() {
    const date = new Date()
    setInterval(() => {
        timeEl.innerText = new Date().toLocaleTimeString()
    }, 1000)
    dateEl.innerText = date.toLocaleDateString()
    msgEl.innerText = setMsg(date)
}

function setMsg(date) {
    let currentTime = date.getHours()
    if (currentTime >= 3 && currentTime < 12) return "good morning"
    else if (currentTime == 12) return "good noon"
    else if (currentTime > 12 && currentTime < 17) return "good afternoon"
    else if (currentTime >= 18 && currentTime < 20) return "good evening"
    else return "good night"
}