let nowpalying = document.querySelector(".nowplaying");
const keys = document.querySelectorAll(".key");
const hint = document.querySelectorAll(".hints");

window.addEventListener("keydown",function(event){
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    if(!key) return;
    const note = key.getAttribute("data-note")
    nowpalying.innerHTML = note;
    key.classList.add('playing');

    audio.currentTime = 0;
    audio.play();
})

function removepalying(){
    this.classList.remove("playing")
}

hint.forEach((elm,index) =>{
  elm.style = `transition-duration: ${index * 100}ms`
})

keys.forEach(key => key.addEventListener('transitionend',removepalying))