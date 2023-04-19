import { carReset } from "./Caramelldansen";
import { iAmNotAFish } from "./Fish";
import { necoReset } from "./Neco";
import { pepReset } from "./Peppino";

export function reset() {
  carReset();
  pepReset();
  necoReset();
  iAmNotAFish();

  document.querySelectorAll("audio").forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });

  let audio = document.getElementById("reset-audio") as HTMLAudioElement;
  audio.volume = 0.2;
  audio.play();
}
