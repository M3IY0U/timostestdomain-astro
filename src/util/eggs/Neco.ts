var necoFirstTime = true;
var necoSound: HTMLAudioElement;

export function neco() {
  if (necoFirstTime) {
    necoFirstTime = false;
    necoSound = document.createElement("audio");
    necoSound.src = "/burenyuu.mp3";
    necoSound.volume = 0.1;
    necoSound.load();
    document
      .querySelector("html")!
      .setAttribute("style", "background-image: url('/neco.jpg');");

    console.log(`%cBurenyuu ~`, `font-size:3em;`);
  }

  const sound = necoSound.cloneNode() as HTMLAudioElement;
  sound.volume = 0.2;
  sound.play();
  sound.remove();
}

export function necoReset() {
  if (!document.querySelector("html")!.hasAttribute("style")) return;
  necoFirstTime = true;
  document.querySelector("html")!.removeAttribute("style");
  console.clear();
}
