window.addEventListener('load', calculateTime)

function calculateTime(){
    let date = new Date()
    let dayNumber = date.getDay()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let dayNames = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute

    document.getElementById("day").innerHTML = dayNames[dayNumber]
    document.getElementById("hour").innerHTML = hour
    document.getElementById("minute").innerHTML = minute

    setTimeout(calculateTime, 200)
}