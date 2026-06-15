# PortfolioPageExample
# Editkaro.in Portfolio Website

A modern, responsive portfolio website for **Editkaro.in**, a professional video editing and social media marketing agency. The website showcases different categories of video editing projects through an interactive portfolio gallery with filtering functionality and a video preview modal.

## 🚀 Features

* **Modern Landing Page** with engaging hero section
* **Responsive Design** optimized for desktop and mobile devices
* **Interactive Portfolio Gallery**

  * Dynamic project rendering using JavaScript
  * Category-based filtering
  * Smooth animations and hover effects
* **Video Preview Modal**

  * Lightbox-style popup for project previews
  * Easy-to-integrate video player support
* **Smooth Scrolling Navigation**
* **Lazy Loading Images** for improved performance
* **Professional Dark Theme UI**

---

## 📂 Project Structure

```text
├── index.html
├── styles.css
├── script.js
└── README.md
```

### Files Overview

| File         | Description                                                                     |
| ------------ | ------------------------------------------------------------------------------- |
| `index.html` | Main website structure and content                                              |
| `styles.css` | Styling, layout, animations, and responsive design                              |
| `script.js`  | Portfolio rendering, filtering logic, modal functionality, and smooth scrolling |
| `README.md`  | Project documentation                                                           |

---

## 🎨 Portfolio Categories

The website supports the following project categories:

* Short-Form Content
* Long-Form Videos
* Gaming Edits
* Football Highlights
* eCommerce Videos
* Documentary Films
* Color Grading Projects
* Anime Music Videos (AMVs)
* Advertisement Campaigns

---

## 🛠 Technologies Used

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript (ES6)

### Libraries

* Font Awesome 6.4.0

  * Icons for UI elements and social media links

### External Resources

* Unsplash Images for portfolio thumbnails and hero background

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/editkaro-portfolio.git
```

### 2. Navigate to Project Folder

```bash
cd editkaro-portfolio
```

### 3. Open the Website

Simply open `index.html` in your browser.

Alternatively, run a local development server:

```bash
# VS Code Live Server
Right Click → Open with Live Server
```

or

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

---

## 🔧 Customization

### Add New Portfolio Projects

Edit the `portfolioData` array inside `script.js`:

```javascript
{
  id: 11,
  title: "New Project",
  category: "short-form",
  img: "image-url"
}
```

### Add New Categories

1. Add a filter button in `index.html`

```html
<button class="filter-btn" data-filter="podcast">
  Podcast
</button>
```

2. Use the same category value in the project data.

---

## 🎥 Integrating Real Videos

Currently, the modal contains a placeholder video player.

Replace the modal content with:

### YouTube Embed

```html
<iframe
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen>
</iframe>
```

### HTML5 Video

```html
<video controls width="100%">
  <source src="video.mp4" type="video/mp4">
</video>
```

You can dynamically load videos based on the selected portfolio item.

---

## 📱 Responsive Design

The website is optimized for:

* Desktop
* Laptop
* Tablet
* Mobile Devices

Current mobile implementation hides navigation links for simplicity. A hamburger menu can be added for production deployments.

---

## ✨ Future Enhancements

* Hamburger mobile navigation
* Real video playback integration
* Portfolio search functionality
* Category counters
* Contact form with backend integration
* CMS integration
* Dark/Light theme toggle
* Project detail pages
* Performance optimization with image CDN

---

## 📧 Contact

**Editkaro.in**

Email: [hello@editkaro.in](mailto:hello@editkaro.in)

For professional video editing, content creation, and social media growth services, get in touch and bring your vision to life.
