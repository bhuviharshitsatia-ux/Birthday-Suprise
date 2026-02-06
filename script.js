const btn = document.getElementById("surpriseBtn");
const msg = document.getElementById("message");
const music = document.getElementById("bgMusic");

const text = `
Hey, First of all, a veryyyyyyyyyyyyyy Happy Birthday Maharani ji.
Just to let you know I am always here to make every day of your life special and unforgettable.
I probably won't be able to give you any gifts, cause you already know.
So sorry about that, this is the least I can do for you.
And now your job is to tell me how to make this day very special, I'm ready to do anything ;)
<3

- Your abby.....
`;

let index = 0;

btn.addEventListener("click", () => {
  if (music) {
    music.play().catch(() => {});
  }

  confettiBurst();

  msg.classList.remove("hidden");
  btn.style.display = "none";
  msg.innerHTML = "";
  index = 0;
  typeText();
});

function typeText() {
  if (index < text.length) {
    msg.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 40);
  } else {
    setTimeout(() => {
      msg.innerHTML += "\n\n💗 Always smiling because of you 💗";
    }, 500);
  }
}

/* Floating emojis */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const emojis = ["💖", "✨", "💝", "🎂", "💗"];
  heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 15 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 400);

/* Confetti burst */
function confettiBurst() {
  for (let i = 0; i < 30; i++) {
    const conf = document.createElement("div");
    conf.innerText = "🎉";
    conf.style.position = "fixed";
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-20px";
    conf.style.fontSize = Math.random() * 10 + 20 + "px";
    conf.style.animation = "fall 3s linear";
    document.body.appendChild(conf);

    setTimeout(() => conf.remove(), 3000);
  }
}


