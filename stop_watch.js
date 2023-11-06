let [hours, minutes, seconds] = [0, 0 , 0]
let start_button = document.querySelector(`.start_button`)
let stop_button = document.querySelector(`.stop_button`)
let reset_button = document.querySelector(`.reset_button`)


start_button.addEventListener(`click`, () => {
    watch_start()
}
)

stop_button.addEventListener(`click`, () => {
    watch_stop()
}
)

reset_button.addEventListener(`click`, () => {
  watch_reset()
}
)
 let interval_id;

function update_timer(){
 
    seconds++
    if (seconds === 60){
      seconds = 0;
      minutes++
      if (minutes === 60){
        minutes = 0;
        hours++
      }
    }

    let h = hours < 10 ? `0${hours}` :  `${hours}`;
    let m = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let s = seconds < 10 ? `0${seconds}` : `${seconds}`;
  

  document.querySelector(`.timer`).innerHTML = `${h}:${m}:${s}`
  localStorage.setItem(`array`, JSON.stringify(hours, minutes, seconds))
}

function watch_start(){
   clearInterval(interval_id)
   interval_id = setInterval(() => {
    
    update_timer()
    
  }, 1000)
}
function watch_stop(){
  clearInterval(interval_id)
}
function watch_reset(){
  clearInterval(interval_id);
  [hours, minutes, seconds] = [0,  0 , 0]
  document.querySelector(`.timer`).innerHTML = `0:00:00`
}