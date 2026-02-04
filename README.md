# Portfolio
Personal portfolio showcasing SWE/PM projects with detailed case studies

## 🚀 Quick Start - View Locally

### Option 1: Simple HTTP Server (Recommended)

**Using Python 3:**
```bash
python3 -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (if you have it installed):**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Open Directly in Browser

Simply double-click the `index.html` file or open it directly in your browser:
```bash
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

**Note:** Some features work best with a local server (Option 1).

## 📁 Project Structure

```
Portfolio/
├── index.html       # Main HTML file with all sections
├── styles.css       # Complete styling and responsive design
├── script.js        # Navigation and interactive features
├── images/          # Add your project images here (create this folder)
└── README.md        # This file
```

## 🖼️ Adding Your Project Images

1. Create an `images` folder in the project root
2. Add your project screenshots/images with these names:
   - `project1.jpg` - E-Commerce Platform images
   - `project2.jpg` - Data Analytics Dashboard images
   - `project3.jpg` - Task Management App images
3. The site will automatically display your images

## ✏️ Customizing Your Portfolio

### Update Your Information

Edit `index.html` to personalize:
- **Hero Section**: Your title and tagline
- **About Section**: Your background and skills
- **Projects Section**: Replace with your actual projects
- **Contact Section**: Update email and social links

### Modify Colors

Edit `styles.css` at the top (`:root` section) to change colors:
```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #50c878;
    --accent-color: #f39c12;
    /* ... */
}
```

## 📱 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Mobile hamburger menu
- ✅ Case study format for projects (Problem/Solution/Impact/Tech Stack)
- ✅ Clean, professional design
- ✅ No build process required - pure HTML/CSS/JS

## 🌐 Deployment

### GitHub Pages
1. Go to repository Settings > Pages
2. Select branch `main` (or your branch)
3. Click Save
4. Your site will be live at `https://yourusername.github.io/Portfolio`

### Netlify/Vercel
Simply drag and drop the entire folder to deploy instantly.

## 📝 License

Feel free to use this template for your own portfolio!
