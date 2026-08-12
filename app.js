window.addEventListener("keydown", function (e) {
  // console.log(e.key);

  const allowedKeys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

  if (!allowedKeys.includes(e.key)) {
    return;
  }

  // console.log("Pressed:",  e.key);

  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);

  if (!key || !audio) {
    return;
  }

  // console.log("Pressed:",  e.key);

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play()

  setTimeout(() => {
    key.classList.remove("playing");
  }, 150);
      
    

});
