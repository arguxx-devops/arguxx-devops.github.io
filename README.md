# Arguxx Portfolio

A modern, responsive portfolio website with a Bento.me-inspired design.

## 📁 Structure

```
arguxx.github.io/
├── index.html          # Main HTML file
├── styles.css          # All styling (separated)
├── script.js           # All JavaScript (separated)
└── mkdocs-backup/      # Backup of MkDocs setup (if needed later)
```

## 🚀 Features

-   **Modern Bento Grid Layout** - Asymmetric card-based design
-   **Dark Theme** - Professional dark mode design
-   **Fully Responsive** - Works on all devices
-   **Smooth Animations** - Entrance animations and hover effects
-   **Interactive Elements** - Click to copy email, hover effects
-   **Clean Separation** - HTML, CSS, and JS in separate files
-   **Easy to Maintain** - Simple structure, easy to edit

## 🎨 Customization

### Update Personal Information

**In `index.html`:**

-   Change profile name and bio
-   Update email address
-   Modify social media links
-   Add/remove cards as needed

### Change Colors

**In `styles.css`:**
Edit the CSS variables at the top:

```css
:root {
    --bg-primary: #0a0a0a;
    --accent-purple: #a78bfa;
    --accent-pink: #ec4899;
    /* ... etc */
}
```

### Add Features

**In `script.js`:**

-   Add new interactive features
-   Modify animations
-   Add event listeners

## 📝 Making Changes

1. **Edit content** - Open `index.html` and modify text, links, etc.
2. **Change styles** - Open `styles.css` and adjust colors, spacing, etc.
3. **Add functionality** - Open `script.js` and add JavaScript features
4. **Test locally** - Open `index.html` in your browser
5. **Deploy** - Push to GitHub and it's live!

## 🌐 Deployment

### GitHub Pages

1. Push files to your repository:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

2. Your site will be live at: `https://arguxx.github.io`

## 🎯 Card Types

1. **Profile Card** - Main profile information
2. **DevOps Docs** - Link to documentation
3. **Location** - Your location
4. **Projects** - Portfolio projects
5. **Social** - Social media links
6. **Blog** - Blog link
7. **Status** - Availability indicator
8. **Email** - Click to copy email
9. **About** - About page link

## ⚙️ Optional Features

### Enable Light Mode

Add a button to toggle themes:

```html
<button onclick="toggleTheme()">Toggle Theme</button>
```

The function is already in `script.js`!

### Email Copy Feature

Click on the email card to copy email to clipboard (already implemented).

## 📦 Backup

The MkDocs setup has been moved to `mkdocs-backup/` folder.

To restore MkDocs if needed:

```bash
mv mkdocs-backup/* .
```

## 🛠️ Tech Stack

-   **HTML5** - Semantic markup
-   **CSS3** - Modern styling with CSS Grid and custom properties
-   **Vanilla JavaScript** - No frameworks, pure JS

## 📱 Browser Support

-   Chrome/Edge (latest)
-   Firefox (latest)
-   Safari (latest)
-   Mobile browsers

## 💡 Tips

-   Keep the code simple and maintainable
-   Test on multiple devices
-   Optimize images before adding
-   Use semantic HTML
-   Keep CSS organized by sections

## 📄 License

MIT License - Feel free to use this for your own portfolio!

## 👤 Author

**Arguxx**

-   GitHub: [@arguxx](https://github.com/arguxx)
-   LinkedIn: [arguxx](https://linkedin.com/in/arguxx)
-   Twitter: [@arguxx](https://twitter.com/arguxx)

---

⭐ Star this repo if you find it useful!
