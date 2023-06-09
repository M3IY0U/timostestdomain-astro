export class Egg {
  #phrase: string[];
  #progress: number = 0;
  callback: Function;
  #repeatable: boolean = false;
  #event;
  hint: string;

  constructor(text: string, callback: Function, repeat: boolean, hint: string) {
    this.#phrase = text.split("");
    this.callback = callback;
    this.#event = this.#keyDownHandler.bind(this);
    this.#repeatable = repeat;
    this.hint = hint;
    document.addEventListener("keydown", this.#event);
  }

  #keyDownHandler = (e: KeyboardEvent) => {
    if (e.key === this.#phrase[this.#progress]) {
      this.#progress++;
      if (this.#progress === this.#phrase.length) {
        this.callback();
        if (!this.#repeatable) {
          document.removeEventListener("keydown", this.#event);
        }
        this.#progress = 0;
      }
    } else {
      this.#progress = 0;
    }
  };
}
