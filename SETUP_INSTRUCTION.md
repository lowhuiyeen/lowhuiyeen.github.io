# Portfolio Website Setup Instructions

## 📁 File Structure

Create this exact folder structure in your project:

```
my-website/
├── index.html
├── about.html
├── education.html
├── research.html
├── projects.html
├── publications.html
├── contact.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── (future JavaScript files)
│   └── images/
│       └── LowHuiYeenProfile.jpg
├── projects/
│   └── (project detail pages - create later)
├── research/
│   └── (research materials - create later)
└── publications/
    └── (publication files - create later)
```

## 🚀 Quick Setup Commands

### Windows PowerShell

```powershell
# Navigate to your project
cd C:\hy_LOCAL\Portfolio\GitHub\my-website

# Create folder structure
New-Item -ItemType Directory -Force -Path assets\css
New-Item -ItemType Directory -Force -Path assets\js
New-Item -ItemType Directory -Force -Path assets\images
New-Item -ItemType Directory -Force -Path projects
New-Item -ItemType Directory -Force -Path research
New-Item -ItemType Directory -Force -Path publications

# Move profile image (if not already there)
# Move-Item LowHuiYeenProfile.jpg assets\images\

# Verify structure
tree /F
```

## 📝 Files to Create/Copy

### 1. Main CSS File
Copy the CSS from the artifact to: `assets/css/style.css`

### 2. HTML Pages
Copy each HTML template to the root folder:
- `index.html` (use your existing enhanced version)
- `about.html`
- `education.html`
- `research.html`
- `projects.html`
- `publications.html`
- `contact.html`

### 3. README.md
Copy the README content to: `README.md`

## ✏️ Customization Checklist

### Before Deploying:

- [ ] Update email addresses in all HTML files
- [ ] Update LinkedIn URL
- [ ] Update GitHub username (if different)
- [ ] Add your Bachelor's university name in `education.html`
- [ ] Replace placeholder text with your content
- [ ] Add your actual research interests
- [ ] Upload your profile picture to `assets/images/`
- [ ] Update social media links

### Content to Add Later:

- [ ] About me details
- [ ] Research project descriptions
- [ ] Academic projects
- [ ] Publications (as they become available)
- [ ] Awards and achievements
- [ ] Skills and certifications

## 🎨 Customizing Colors

To change the color scheme, edit `assets/css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Change to your preferred primary color */
    --secondary-color: #3498db;    /* Change to your preferred secondary color */
    --accent-color: #e74c3c;       /* Change to your preferred accent color */
}
```

## 📤 Deploying to GitHub

### First Time Setup:

```bash
# Check current status
git status

# Stage all files
git add .

# Commit with descriptive message
git commit -m "feat: create complete portfolio template structure

- Add 7 HTML pages with consistent navigation
- Create organized CSS file with variables
- Set up assets folder structure
- Add empty templates for future content
- Include README with project info"

# Push to GitHub
git push origin main
```

### Enable GitHub Pages:

1. Go to: https://github.com/lowhuiyeen/lowhuiyeen.github.io
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: `main`, folder: `/ (root)`
5. Save

Your site will be live at: **https://lowhuiyeen.github.io**

## 🔄 Future Updates

Whenever you add content:

```bash
# Make your changes...

# Check what changed
git status
git diff

# Stage specific files or all changes
git add about.html
# or
git add .

# Commit with descriptive message
git commit -m "docs: add personal introduction to about page"

# Push to GitHub
git push origin main

# Site will automatically update in 1-3 minutes
```

## 📧 Contact Form Integration Options

The contact form in `contact.html` is currently non-functional. Here are free options:

### Option 1: Formspree (Recommended)
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action: `<form action="https://formspree.io/f/YOUR_ID" method="POST">`

### Option 2: Google Forms
1. Create a Google Form
2. Embed it in your contact page
3. Replace the form section with the embed code

### Option 3: Netlify Forms (if using Netlify)
1. Add `netlify` attribute to form: `<form name="contact" netlify>`
2. Deploy to Netlify instead of GitHub Pages

## 🎯 Next Steps

1. **Immediate:**
   - Copy all template files to your project
   - Update personal information (email, links)
   - Commit and push to GitHub

2. **This Week:**
   - Fill in About page
   - Complete Education page
   - Add research interests

3. **Ongoing:**
   - Add projects as you complete them
   - Update publications as they're published
   - Add new content sections as needed

## 🐛 Troubleshooting

### Images Not Loading?
- Check file path: `assets/images/LowHuiYeenProfile.jpg`
- Ensure filename matches exactly (case-sensitive)
- Verify image is committed to repository

### CSS Not Applying?
- Check link path in HTML: `<link rel="stylesheet" href="assets/css/style.css">`
- Clear browser cache (Ctrl+F5)
- Check browser console for errors

### Site Not Updating?
- Wait 2-3 minutes after push
- Check Actions tab for build status
- Hard refresh browser (Ctrl+Shift+R)

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/pages)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [HTML Best Practices](https://github.com/hail2u/html-best-practices)

---

**Questions or Issues?** 
Check the troubleshooting section or create an issue in your repository.

Good luck with your portfolio! 🚀