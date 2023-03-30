export async function caramell() {
  // create overlay div with gif as background
  const overlay = document.createElement("div");
  overlay.setAttribute(
    "style",
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 10; pointer-events: none; opacity: 0.3;"
  );
  overlay.style.backgroundBlendMode = "overlay";

  const colors = ["red", "orange", "green", "blue", "purple"];

  document.querySelector("html")!.appendChild(overlay);

  const audio = document.createElement("audio");
  audio.id = "caramell-audio";
  audio.src = "/caramelldansen.mp3";
  audio.volume = 0.1;
  audio.load();
  document.querySelector("html")!.appendChild(audio);
  audio.play();

  await new Promise((r) => setTimeout(r, 2500));

  var track = document.querySelector("#last-track") as HTMLElement;
  var link = document.querySelector("#last-link") as HTMLAnchorElement;

  var pSong = track.innerHTML;
  var pLink = link.href;

  link.href = "https://www.last.fm/music/Caramella+Girls/_/Caramelldansen";
  track.innerHTML = "CARAMELLA GIRLS - CARAMELLDANSEN";
  track.previousElementSibling!.innerHTML = "NOW PLAYING";

  var current = 0;
  var disco = setInterval(() => {
    overlay.style.backgroundColor = colors[++current % colors.length];
  }, (60 / 165) * 1000);

  audio.addEventListener("pause", () => {
    overlay.remove();
    clearInterval(disco);
    document.querySelector("#last-track")!.innerHTML = pSong;
    (document.querySelector("#last-link") as HTMLAnchorElement).href = pLink;
  });
}

export function carReset() {
  var caramells = document.querySelectorAll(
    "[id*='caramell-audio']"
  ) as NodeListOf<HTMLAudioElement>;

  caramells.forEach((caramell) => {
    try {
      caramell.pause();
      caramell.remove();
    } catch {}
  });
}
