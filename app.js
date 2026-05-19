// só exemplo simples

console.log("Site carregado");

// animação fake (flores/corações)
setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}, 1000);