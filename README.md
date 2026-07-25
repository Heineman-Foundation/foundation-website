# The Heineman Foundation — Website

A simple static website. No build step, no dependencies — just HTML, CSS, and a little JS.

## How to edit content

| To change...                        | Edit this file          |
|--------------------------------------|--------------------------|
| History or Grants text               | `index.html`             |
| Board of Directors roster            | `assets/board.json`      |
| Contact email                        | `index.html` (search for `mailto:`) |
| Colors, fonts, spacing               | `assets/style.css`       |

### Updating the board roster

Open `assets/board.json`. It has two lists:

- `officers` — President, Vice President, Treasurer, Secretary
- `members` — everyone else

Each person is `{ "name": "Full Name", "finance": true }`. Set `"finance": true` if they're on the Finance Committee (adds the `*` marker); otherwise `false`. To add or remove someone, add or remove one of these lines — no HTML editing needed.

### Editing directly on GitHub

You don't need to install anything. On github.com, open the file you want to change, click the pencil (edit) icon, make your change, and click "Commit changes." The live site updates automatically within a minute or two.

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, select the branch (usually `main`) and root folder (`/`).
4. Save. Your site will be live at `https://<username>.github.io/<repo-name>/`.

If you want a custom domain (e.g. `heinemanfoundation.org`), add it under **Settings → Pages → Custom domain**, and point your domain's DNS to GitHub Pages per [GitHub's instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## File structure

```
index.html          — the whole site (one page, anchor-linked sections)
assets/style.css     — all styling
assets/board.js      — loads board.json and renders the roster
assets/board.json    — the editable board roster
```
