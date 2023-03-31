var necoFirstTime = true;
var necoSound: HTMLAudioElement;

export function neco() {
  if (necoFirstTime) {
    necoFirstTime = false;
    necoSound = document.createElement("audio");
    necoSound.src = "/burenyuu.mp3";
    document
      .querySelector("html")!
      .setAttribute(
        "style",
        "background-image: url('/burenyuu.svg'); background-position: center;"
      );

    console.log(`%cBurenyuu ~`, `font-size:3em;`);
  }

  document.querySelector("#image-credits")!.innerHTML =
    "Background: La Creatura (by twarqulas#3617)";
  const sound = necoSound.cloneNode() as HTMLAudioElement;
  sound.volume = 0.2;
  sound.play();
  sound.remove();
}

export function necoReset() {
  if (!document.querySelector("html")!.hasAttribute("style")) return;
  necoFirstTime = true;
  document.querySelector("html")!.removeAttribute("style");
  document.querySelector("#image-credits")!.innerHTML =
    'Background: Last page of <a class="underline" target="_blank" rel="noopener noreferrer" href="https://mangadex.org/chapter/3994c2e6-b73e-4010-b237-c2d4d6ef07d1/10">"Memories of Emanon"</a>';
  console.clear();
}
