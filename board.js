// Renders the board roster from assets/board.json.
// To update the board: edit board.json — no HTML editing needed.
// Add "finance": true to mark Finance Committee members.

async function renderBoard() {
  const officersEl = document.getElementById("board-officers");
  const membersEl = document.getElementById("board-members");
  if (!officersEl || !membersEl) return;

  try {
    const res = await fetch("assets/board.json");
    const data = await res.json();

    officersEl.innerHTML = data.officers
      .map(
        (o) => `
        <div class="officer">
          <div class="role">${o.role}</div>
          <div class="name">${o.name}${o.finance ? '<span class="finance-star" aria-label="Finance Committee">*</span>' : ""}</div>
        </div>`
      )
      .join("");

    membersEl.innerHTML = data.members
      .map(
        (m) => `
        <div class="member">${m.name}${m.finance ? '<span class="finance-star" aria-label="Finance Committee">*</span>' : ""}</div>`
      )
      .join("");
  } catch (err) {
    membersEl.innerHTML =
      '<p class="note">Board roster could not be loaded.</p>';
    console.error("Failed to load board.json", err);
  }
}

document.addEventListener("DOMContentLoaded", renderBoard);
