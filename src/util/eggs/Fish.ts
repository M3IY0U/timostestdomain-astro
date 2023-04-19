export function iAmJustAFish() {
  // add two link elements to preload the css images
  let pl1 = document.createElement("link");
  pl1.rel = "prefetch";
  pl1.href = "https://images.unsplash.com/photo-1464802686167-b939a6910659";
  pl1.as = "image";
  let pl2 = document.createElement("link");
  pl2.rel = "prefetch";
  pl2.href = "https://cdn.7tv.app/emote/62523dbbbab59cfd1b8b889d/4x.webp";
  pl2.as = "image";

  document.head.appendChild(pl1);
  document.head.appendChild(pl2);


  // create audio
  let audio = document.createElement("audio");
  audio.src = "fish.mp3";
  audio.preload = "auto";
  audio.load();
  audio.volume = 0.2;
  document.body.appendChild(audio);
  document.querySelector("html")!.style.transitionProperty = "none";

  audio.play();
  sleep(200).then(() => {
    document.querySelector("h1")!.innerText = "dont";
  });

  sleep(1200).then(() => {
    document.querySelector("h1")!.innerText = "dont cry";
  });

  var links = document.querySelectorAll("[id^='link']")! as NodeListOf<HTMLAnchorElement>;

  sleep(2600).then(() => {
    links[0].innerText = "i";
  });

  sleep(2900).then(() => {
    links[1].innerText = "am";
  });

  sleep(3200).then(() => {
    links[2].innerText = "just";
  });

  sleep(3600).then(() => {
    links[3].innerText = "a";
  });

  sleep(3900).then(() => {
    links[4].innerText = "fish";
    document.querySelector("html")!.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1464802686167-b939a6910659')";
    document.querySelector("body")!.style.backgroundImage = "url('https://cdn.7tv.app/emote/62523dbbbab59cfd1b8b889d/4x.webp')";
    document.querySelector("body")!.style.backgroundSize = "contain";
    document.querySelector("body")!.style.backgroundRepeat = "no-repeat";
    document.querySelector("body")!.style.backgroundPosition = "center";
    document.querySelector("#image-credits")!.innerHTML =
      'Background: <a class="underline" target="_blank" rel="noopener noreferrer" href="https://7tv.app/emotes/62523dbbbab59cfd1b8b889d">Joel</a>';
  });
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function iAmNotAFish() {
  document.querySelector("html")!.removeAttribute("style");
  document.querySelector("#image-credits")!.innerHTML =
    'Background: Last page of <a class="underline" target="_blank" rel="noopener noreferrer" href="https://mangadex.org/chapter/3994c2e6-b73e-4010-b237-c2d4d6ef07d1/10">"Memories of Emanon"</a>';
    var links = document.querySelectorAll("[id^='link']")! as NodeListOf<HTMLAnchorElement>;
    links[0].innerText = "GitHub";
    links[1].innerText = "Steam";
    links[2].innerText = "Letterboxd";
    links[3].innerText = "last.fm";
    links[4].innerText = "AniList";
    document.querySelector("body")!.removeAttribute("style");
    document.querySelector("h1")!.innerText = "welcome to my website";
}