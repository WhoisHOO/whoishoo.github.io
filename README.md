# younghoocho.github.io

Personal portfolio site built with [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

## Pages

| Nav | Content |
|-----|---------|
| About | Bio, selected papers, social links |
| Projects | DEMETER (platform), Marine CV (applied ai) |
| Publications | BibTeX-rendered publication list |
| CV | Rendered CV + PDF download |

## Deploy (GitHub Pages)

Push to `main`. The GitHub Action (`.github/workflows/deploy.yml`) builds Jekyll and deploys automatically.

1. Go to **Settings > Pages** in the GitHub repo.
2. Under **Source**, select **GitHub Actions**.
3. Push changes to `main`.
4. Site will be live at **https://younghoocho.github.io**.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Adding images

Place image files in `assets/img/`. Required images:

**Profile:**
- `assets/img/prof_pic.jpg` — profile photo on about page

**DEMETER project:**
- `assets/img/demeter-thumbnail.jpg` — project card thumbnail
- `assets/img/demeter-architecture.png` — architecture diagram
- `assets/img/demeter-login.png`
- `assets/img/demeter-verify.png`
- `assets/img/demeter-trace.png`
- `assets/img/demeter-integration-pass.png`
- `assets/img/demeter-integration-fail.png`
- `assets/img/demeter-reuse.png`
- `assets/img/demeter-myfiles.png`
- `assets/img/demeter-agent.png`

**Marine CV project:**
- `assets/img/marine-thumbnail.jpg` — project card thumbnail
- `assets/img/marine-yolo.png`
- `assets/img/marine-sam.png`
- `assets/img/marine-environment.png`

## File structure

```
├── _bibliography/papers.bib    Publications (BibTeX)
├── _data/
│   ├── cv.yml                  CV data (rendered on /cv/)
│   ├── coauthors.yml           Co-author links
│   ├── socials.yml             Social media links
│   └── repositories.yml        GitHub repos
├── _pages/
│   ├── about.md                Home / about page
│   ├── projects.md             Projects listing
│   ├── publications.md         Publications page
│   └── cv.md                   CV page
├── _projects/
│   ├── 1_project.md            DEMETER
│   └── 2_project.md            Marine CV
├── assets/
│   ├── img/                    Images
│   ├── json/resume.json        JSON Resume data
│   └── pdf/CV_Yc.pdf           CV PDF
└── _config.yml                 Site configuration
```
