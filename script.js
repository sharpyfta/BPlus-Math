const BASE = "/BPlus-Math/";

function resolve(p) {
  if (!p) return "";
  if (p.startsWith("http")) return p;
  return BASE + p;
}

const grid = document.getElementById("gameGrid");
const modal = document.getElementById("gameModal");
const frame = document.getElementById("gameFrame");
const title = document.getElementById("gameTitle");

function loadGames() {
  if (!window.games) {
    console.error("games not loaded");
    return;
  }

  grid.innerHTML = "";

  window.games.forEach(g => {
    const el = document.createElement("div");
    el.className = "game";

    el.innerHTML = `
      <img src="${g.icon}">
      <div>${g.name}</div>
    `;

    el.onclick = () => {
      title.textContent = g.name;
      frame.src = resolve(g.file);
      modal.classList.remove("hidden");
    };

    grid.appendChild(el);
  });
}

function closeGame() {
  modal.classList.add("hidden");
  frame.src = "";
}

window.addEventListener("DOMContentLoaded", () => {
  loadGames();
  document.getElementById("closeBtn")?.addEventListener("click", closeGame);
});
