# The Heineman Foundation — Website

A single-file static website. No build step, no dependencies, nothing to install.

Everything lives in `index.html` — the text, the styling, and the board roster. Double-click it to open it in any browser and it works.

## How to edit

Open `index.html` in any text editor and search for what you want to change:

| To change...              | Search for...                        |
|---------------------------|--------------------------------------|
| Contact email             | `mailto:`                            |
| History text              | `id="history"`                       |
| Grants text               | `id="grants"`                        |
| Board roster              | `class="board-officers"`             |
| Colors and fonts          | `:root {` (near the top)             |

### Updating the board roster

Find the `board-officers` and `board-members` sections. Each person is one line:

```html
<div class="member">Jane Doe</div>
```

To mark someone as a Finance Committee member, add the star span:

```html
<div class="member">Jane Doe<span class="finance-star" aria-label="Finance Committee">*</span></div>
```

To remove someone, delete their line. To add someone, copy an existing line and change the name.

### Editing directly on GitHub

You don't need to install anything. On github.com, open `index.html`, click the pencil (edit) icon, make your change, and click "Commit changes." The live site updates within a minute or two.

## Hosting on GitHub Pages

1. Create a new repository on GitHub and upload `index.html` to it.
2. Go to **Settings → Pages**.
3. Under **Source**, select branch `main` and folder `/ (root)`.
4. Save. The site goes live at `https://<username>.github.io/<repo-name>/`.

For a custom domain like `heinemanfoundation.org`, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub Pages following GitHub's custom domain documentation.

## A note on fonts

The page loads two fonts (Fraunces and Inter) from Google Fonts. This is the one thing that needs an internet connection. If you open the file offline the layout still works — it just falls back to Georgia and your system default sans-serif.
