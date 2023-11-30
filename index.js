const countdownDisplay = document.getElementById("countdown-display")
countdownDisplay.textContent = ""


//Greatly influenced by Uzair S. from this stackoverflow thread: 'https://stackoverflow.com/questions/62511356/how-to-calculate-the-time-left-in-days-hours-minutes-and-seconds-left-to-reac'
function timeRemaining(){
    const christmas = '2023, 12, 25'
    const total = Date.parse(christmas) - Date.parse(new Date())
    const days = Math.floor( total / (1000*60*60*24))
    const hours = Math.floor( total / (1000*60*60) % 24)
    const minutes = Math.floor( (total/1000/60) % 60)
    const seconds = Math.floor( (total/1000) % 60)
    // console.log(total, days, hours, minutes, seconds)
    countdownDisplay.textContent = `Days: ${days} - Hours: ${hours} - Minutes: ${minutes} - Seconds: ${seconds}`
}
//Timer countdown every second
setInterval(timeRemaining, 1000)
console.log('Ho Ho Ho!! Day 1 of Scrimba\'s Christmas Challenges from Scrimba.com')
// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.