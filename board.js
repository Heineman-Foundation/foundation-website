// Renders the board roster from assets/board.json.
// To update the board: edit board.json — no HTML editing needed.

async function renderBoard() {
  const officersEl = document.getElementById("board-officers");
  if (!officersEl) return;

  try {
    const res = await fetch("assets/board.json");
    const data = await res.json();

    officersEl.innerHTML = data.officers
      .map(
        (o) => `
        <div class="officer">
          <div class="role">${o.role}</div>
          <div class="name">${o.name}</div>
        </div>`
      )
      .join("");
  } catch (err) {
    officersEl.innerHTML =
      '<p class="note">Board roster could not be loaded.</p>';
    console.error("Failed to load board.json", err);
  }
}

document.addEventListener("DOMContentLoaded", renderBoard);
