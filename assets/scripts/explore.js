// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  let img = document.querySelector('img');
  img.src='assets/images/smiling.png';
  const voiceSelect = document.querySelector('select');
  synth.addEventListener('voiceschanged', () => {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
    );
  });
  document.querySelector('button').addEventListener('click', () => {
    let text = document.querySelector('textarea').value;
    if(text.length==0){
      return;
    }
    let utter = new SpeechSynthesisUtterance(text);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    const voices = synth.getVoices();
    utter.voice = voices.find(voice => voice.name === selectedOption);
    synth.speak(utter);
    img.src = 'assets/images/smiling-open.png';
    utter.addEventListener('end', () => {
      img.src = 'assets/images/smiling.png';
    });
  });
  
}