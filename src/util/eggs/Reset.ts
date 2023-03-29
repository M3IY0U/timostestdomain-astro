import { carReset } from "./Caramelldansen";
import { necoReset } from "./Neco";
import { pepReset } from "./Peppino";

export function reset() {
  carReset();
  pepReset();
  necoReset();

  document.querySelectorAll("audio");

  let audio = document.getElementById("reset-audio") as HTMLAudioElement;
  audio.volume = 0.2;
  audio.play();
}
