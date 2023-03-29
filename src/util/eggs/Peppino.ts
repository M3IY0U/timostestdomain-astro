var cancel = false;

export async function peppino() {
  // create random id for classname
  var num = Math.floor(Math.random() * 1000);

  var scream = document.createElement("audio");
  scream.src = "/scream.wav";
  scream.id = "peppino-scream";
  scream.className = `peppino${num}`;
  scream.load();
  scream.volume = 0.1;
  document.querySelector("html")!.appendChild(scream);

  scream.play();

  var explosion = document.createElement("audio");
  explosion.src = "/pep-taunts/explosion.mp3";
  explosion.id = "peppino-explosion";
  explosion.className = `peppino${num}`;
  explosion.load();
  explosion.volume = 0.1;
  document.querySelector("html")!.appendChild(explosion);

  await new Promise((r) => setTimeout(r, 1500));

  var taunt = document.createElement("audio");
  taunt.src = "/sfx_taunt.wav";
  taunt.load();
  for (let i = 0; i < 10; i++) {
    if (cancel) {
      cancel = false;
      document.querySelectorAll("[class*='peppino']").forEach((e) => e.remove());
      return;
    }

    await new Promise((r) => setTimeout(r, 500));
    const div = document.createElement("div");
    div.setAttribute(
      "style",
      "position: absolute; width: 100px; height: 100px; z-index: 10; pointer-events: none;"
    );

    // random top and left with 100px offset from edge
    div.style.top = `${Math.random() * (window.innerHeight - 200) + 100}px`;
    div.style.left = `${Math.random() * (window.innerWidth - 200) + 100}px`;

    div.style.backgroundImage = `url('/pep-taunts/taunt${i}.webp')`;
    div.style.backgroundSize = "contain";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";

    // rotate div randomly
    div.style.transform = `rotate(${Math.random() * 360}deg)`;
    div.className = `peppino${num}`;

    document.querySelector("html")!.appendChild(div);
    const sound = taunt.cloneNode() as HTMLAudioElement;
    sound.volume = 0.1;
    sound.className = `peppino${num}`;
    document.querySelector("html")!.appendChild(sound);
    if (i != 9) sound.play();
  }

  [...(document.querySelectorAll(`.peppino${num}`) as NodeListOf<HTMLElement>)].forEach(
    (node) => (node.style.backgroundImage = `url('/pep-taunts/explosion.gif')`)
  );

  explosion.play();
  await new Promise((r) => setTimeout(r, 1500));

  document.querySelectorAll(`.peppino${num}`).forEach((node) => node.remove());
}

export function pepReset() {
  cancel = true;
  document.querySelectorAll("[class*='peppino']").forEach((e) => e.remove());
}
