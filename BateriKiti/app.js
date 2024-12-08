function playSound(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key   = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //Fonksiyon çalışmasını durdurur
    audio.currentTime = 0; //başlamak için geri sarma süresi
    audio.play();
   
    key.classList.add("playing");
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);