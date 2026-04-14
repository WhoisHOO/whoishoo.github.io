# younghoocho.github.io

Personal portfolio site.

## Local preview

Open `index.html` directly in a browser:

```bash
open index.html
```

Or run a local server (avoids potential path issues):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Deploy (GitHub Pages)

This repo is named `younghoocho.github.io`, so GitHub Pages serves it automatically from the `main` branch.

1. Push changes to `main`:
   ```bash
   git add -A
   git commit -m "update site"
   git push origin main
   ```
2. Go to **Settings > Pages** in the GitHub repo.
3. Under **Source**, select **Deploy from a branch** > **main** > **/ (root)**.
4. Site will be live at **https://younghoocho.github.io** within a few minutes.

## File structure

```
├── index.html              Main page
├── style.css               Shared styles
├── CV_Yc.pdf               CV download
├── images/                 Project screenshots (to be added)
├── projects/
│   ├── demeter.html        DEMETER project detail
│   └── marine-cv.html      Marine CV project detail
└── README.md
```

## Adding images

Place image files in `images/` and replace the placeholder `<div>` blocks in the project pages with `<img>` tags:

```html
<!-- replace this -->
<div class="image-placeholder">
  [Description — place image at images/filename.png]
</div>

<!-- with this -->
<img src="../images/filename.png" alt="Description">
```
