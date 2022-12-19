window.addEventListener('keydown', function (event) {
  const audio = document.querySelector(`audio[data-key=${event.key.toLowerCase()}]`);
  const key = this.document.querySelector(`.key[data-key=${event.key.toLowerCase()}]`)
  if (!audio) return;

  key.classList.add('playing');
  setTimeout(() => {
    key.classList.remove('playing');
  }, 200);

  audio.currentTime = 0;
  audio.play();
});