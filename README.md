# Zak Yudhishthu - Personal Website

A professional academic/policy website built with Jekyll and designed for GitHub Pages hosting.

## Table of Contents

- [Local Development](#local-development)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Updating Content](#updating-content)
- [Customization](#customization)
- [File Structure](#file-structure)

---

## Local Development

### Prerequisites

1. **Ruby** (version 2.7 or higher)
   ```bash
   ruby --version
   ```

2. **Bundler** (Ruby package manager)
   ```bash
   gem install bundler
   ```

### Setup

1. Navigate to the project directory:
   ```bash
   cd /Users/zakaryyudhishthu/Documents/claude_git_website
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Start the local server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser to `http://localhost:4000`

The site will automatically rebuild when you make changes to files.

### Troubleshooting Local Development

If you get errors about missing gems:
```bash
bundle update
```

If you get permission errors:
```bash
bundle install --path vendor/bundle
bundle exec jekyll serve
```

---

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click "New repository" (the + icon in the top right)
3. **For a personal site** (yourname.github.io):
   - Name the repository `yourusername.github.io` (replace with your actual GitHub username)
   - This will make your site available at `https://yourusername.github.io`
4. **For a project site** (yourname.github.io/sitename):
   - Name it whatever you want (e.g., `personal-site`)
   - Your site will be at `https://yourusername.github.io/sitename`
5. Keep the repository **private** if you don't want the code public yet
6. Don't initialize with README, .gitignore, or license (we already have files)

### Step 2: Configure Your Site URL

Edit `_config.yml` and update these lines:

**For a personal site (username.github.io):**
```yaml
url: "https://yourusername.github.io"
baseurl: ""
```

**For a project site (username.github.io/reponame):**
```yaml
url: "https://yourusername.github.io"
baseurl: "/reponame"
```

### Step 3: Push to GitHub

From the project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial website setup"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (tab at the top)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait a few minutes for the site to build

Your site will be live at the URL shown in the Pages settings.

### Step 5: (Optional) Custom Domain

1. In repository Settings > Pages, enter your custom domain
2. Create a file called `CNAME` in the root directory with just your domain:
   ```
   yourdomain.com
   ```
3. Configure DNS with your domain provider:
   - For apex domain (yourdomain.com): Add A records pointing to GitHub's IPs
   - For subdomain (www.yourdomain.com): Add CNAME record pointing to `yourusername.github.io`

See [GitHub's custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

---

## Updating Content

### Adding a New Article to Your Portfolio

1. Open `_data/writing.yml`
2. Add a new entry at the top (or in the appropriate section):

```yaml
- title: "Your Article Title"
  publication: Publication Name
  date: 2025-01-15
  url: "https://link-to-article.com"
  description: "One or two sentences describing the piece and your analytical approach."
  style: Quantitative  # or Policy, or Commentary
  region: Chicago      # or Twin Cities, or Comparative
  topics:
    - Zoning Reform
    - Data Visualization
  featured: false      # set to true to highlight this piece
```

3. Save the file and commit:
```bash
git add _data/writing.yml
git commit -m "Add new article: Your Article Title"
git push
```

### Editing Page Content

- **Home/About**: Edit `index.md`
- **Writing intro**: Edit `writing.md`
- **Research**: Edit `research.md`
- **Current Work**: Edit `current-work.md`
- **Contact/CV**: Edit `contact.md`

### Adding Images/Visualizations

1. Add images to `assets/images/`
2. Reference them in Markdown:
   ```markdown
   ![Description](/assets/images/your-image.png)
   ```
3. For the visualization gallery, edit `research.md` and add:
   ```html
   <div class="viz-item">
     <figure>
       <img src="/assets/images/viz-name.png" alt="Description">
       <figcaption>Caption explaining the visualization</figcaption>
     </figure>
   </div>
   ```

### Updating Your Bio

Edit `index.md` for the main about page, and `_includes/footer.html` for the footer bio.

---

## Customization

### Colors and Typography

Edit `_sass/_variables.scss` to change:
- Colors (`$color-primary`, `$color-accent`, etc.)
- Fonts (`$font-serif`, `$font-sans`)
- Spacing values

### Adding New Pages

1. Create a new Markdown file (e.g., `new-page.md`)
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Page Title
   permalink: /new-page/
   ---
   ```
3. Add to navigation in `_includes/header.html`

### Style Tags

The portfolio uses three style categories with distinct colors:
- **Quantitative** (blue): Data-driven analysis
- **Policy** (green): Policy advocacy and argumentation
- **Commentary** (brown): Essays and broader reflections

Edit colors in `_sass/_variables.scss`:
```scss
$color-quantitative: #2d5a87;
$color-policy: #5b6b4f;
$color-commentary: #7c5c4a;
```

---

## File Structure

```
.
├── _config.yml           # Site configuration
├── _data/
│   └── writing.yml       # Portfolio entries (edit this to add articles)
├── _includes/
│   ├── head.html         # <head> content
│   ├── header.html       # Navigation bar
│   ├── footer.html       # Page footer
│   └── portfolio-item.html  # Portfolio entry template
├── _layouts/
│   ├── default.html      # Base layout
│   ├── home.html         # Home page layout
│   ├── page.html         # Standard page layout
│   └── portfolio.html    # Portfolio page layout
├── _sass/
│   ├── _variables.scss   # Colors, fonts, spacing
│   ├── _base.scss        # Typography, resets
│   ├── _layout.scss      # Header, footer, main
│   └── _components.scss  # Cards, tags, filters
├── assets/
│   ├── css/main.scss     # Main stylesheet
│   ├── js/main.js        # Filtering, navigation
│   └── images/           # Your images
├── index.md              # Home/About page
├── writing.md            # Portfolio page
├── research.md           # Research & Methods
├── current-work.md       # Current Work
├── contact.md            # Contact/CV
├── feed.xml              # RSS feed
├── Gemfile               # Ruby dependencies
└── README.md             # This file
```

---

## Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add to `_includes/head.html` before the closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

---

## Support

For Jekyll documentation: [jekyllrb.com](https://jekyllrb.com)
For GitHub Pages documentation: [docs.github.com/pages](https://docs.github.com/en/pages)
