// --- 1. Portfolio Data ---
// Mock data simulating the client's actual video projects
const portfolioData = [
    { id: 1, title: "High-Retention TikTok Hacks", category: "short-form", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 2, title: "Tech Startup Brand Story", category: "long-form", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 3, title: "Valorant Montage #4", category: "gaming", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 4, title: "Champions League Highlights", category: "football", img: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 5, title: "Sneaker Drop Campaign", category: "ecommerce", img: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 6, title: "The Artisan's Craft", category: "documentary", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 7, title: "Cinematic Forest LUT Pack", category: "color-grading", img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 8, title: "AMV Edit - Demon Slayer", category: "anime", img: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 9, title: "Fitness App Launch", category: "ads", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" },
    { id: 10, title: "Reels Viral Format", category: "short-form", img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" }
];

// --- 2. DOM Elements ---
const gridContainer = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-modal');

// --- 3. Render Portfolio Items ---
function renderPortfolio(items) {
    gridContainer.innerHTML = ''; // Clear grid
    
    items.forEach(item => {
        // Create card element
        const card = document.createElement('div');
        card.className = 'portfolio-item show';
        card.setAttribute('data-category', item.category);
        
        // Format category name for display (e.g., "short-form" -> "Short Form")
        const displayCategory = item.category.replace('-', ' ');

        card.innerHTML = `
            <div class="item-thumb">
                <img src="${item.img}" alt="${item.title}" loading="lazy">
                <i class="fas fa-play-circle play-icon"></i>
            </div>
            <div class="item-info">
                <span class="item-category">${displayCategory}</span>
                <h3 class="item-title">${item.title}</h3>
            </div>
        `;

        // Add Lightbox Event
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            // In a real scenario, you would dynamically inject the specific YouTube/Vimeo iframe here based on item.id
        });

        gridContainer.appendChild(card);
    });
}

// Initial render of all items
renderPortfolio(portfolioData);

// --- 4. Filtering Logic ---
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Handle active button styling
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Handle filtering logic
        const filterValue = btn.getAttribute('data-filter');
        
        if (filterValue === 'all') {
            renderPortfolio(portfolioData);
        } else {
            const filteredData = portfolioData.filter(item => item.category === filterValue);
            renderPortfolio(filteredData);
        }
    });
});

// --- 5. Modal Logic ---
// Close modal when X is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the content box
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});