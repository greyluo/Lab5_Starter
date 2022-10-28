// expose.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  document.querySelector('#horn-select').addEventListener('change', (event) => {
    let horn = event.target.value;
    let audio = document.querySelector('audio');
    //select image under hone-select
    let img = document.querySelector('img');
    img.src = `assets/images/${horn}.svg`;
    audio.src = `assets/audio/${horn}.mp3`;
  });
   //volume
   document.querySelector('input').addEventListener('input', () => {
    let volume = document.querySelector('input').value;
    ///volume icon under volume
    let icon = document.querySelector('#volume-controls > img');
    if (volume >= 67) {
      icon.src = 'assets/icons/volume-level-3.svg';
    } else if (volume >= 34) {
      icon.src = 'assets/icons/volume-level-2.svg';
    } else if (volume >= 1) {
      icon.src = 'assets/icons/volume-level-1.svg';
    } else {
      icon.src = 'assets/icons/volume-level-0.svg';
    }
  });
  document.querySelector('button').addEventListener('click', () => {
    let audio = document.querySelector('audio');
    audio.volume = document.querySelector('input').value / 100;
    if(audio.src.includes('party-horn')) {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    audio.play();
  });
 

}