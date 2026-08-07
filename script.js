function startSurprise() {
  // Smooth scroll to gallery
  document.getElementById("gallery").scrollIntoView({
    behavior: "smooth"
  });

  // Floating hearts
  createHearts();
}

// Floating Hearts Animation
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.className = "heart";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);

  }, 400);
}

// Music Button
const musicBtn = document.getElementById("music");

if (musicBtn) {

const audio = new Audio("music.mp3");

musicBtn.onclick = () => {

audio.play();

musicBtn.innerHTML = "🎵 Playing...";
};

}

// Fade Loader
window.onload = () => {

setTimeout(() => {

const loader = document.querySelector(".loader");

loader.style.display = "none";

},3000);

};
