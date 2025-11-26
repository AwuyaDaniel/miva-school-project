// Gallery Data - Add your images and videos here
const galleryItems = [
    // Images
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Spring 2024 Runway Show'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Winter Collection Runway'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Evening Gowns Collection'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Studio Fitting Session'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Design Team at Work'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Main Campaign Shoot'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Outdoor Campaign'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Fashion Gala 2023'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Charity Fashion Show'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Ethereal Evening Gown'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Structured Blazer Collection'
    },
    {
        type: 'image',
        src: 'images/products/owambe-asoebi-1.jpeg',
        caption: 'Floral Print Dress'
    },

    // Videos (placeholder examples - replace with your actual video URLs)
    // {
    //     type: 'video',
    //     src: 'images/products/vidoe-1.mp4',
    //     caption: 'Full Runway Show Video',
    //     thumbnail: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    // },
    // {
    //     type: 'video',
    //     src: 'images/products/vidoe-2.mp4',
    //     caption: 'Making of Winter Collection',
    //     thumbnail: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    // }
];

// Gallery functionality
document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('galleryGrid');
    const modal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.modal-nav.prev');
    const nextBtn = document.querySelector('.modal-nav.next');

    let currentIndex = 0;

    // Initialize gallery
    function initGallery() {
        renderGallery();
        setupEventListeners();
    }

    // Render gallery items
    function renderGallery() {
        galleryGrid.innerHTML = '';
        
        galleryItems.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-index', index);
            
            if (item.type === 'image') {
                galleryItem.innerHTML = `
                    <img src="${item.src}" alt="${item.caption}" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-caption">${item.caption}</div>
                        <div class="gallery-type">Image</div>
                    </div>
                `;
            } else if (item.type === 'video') {
                galleryItem.innerHTML = `
                    <img src="${item.thumbnail}" alt="${item.caption}" loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-caption">${item.caption}</div>
                        <div class="gallery-type">Video</div>
                        <div class="play-icon">▶</div>
                    </div>
                `;
            }
            
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Setup event listeners
    function setupEventListeners() {
        // Gallery item clicks
        galleryGrid.addEventListener('click', function(e) {
            const galleryItem = e.target.closest('.gallery-item');
            if (galleryItem) {
                currentIndex = parseInt(galleryItem.dataset.index);
                openModal(currentIndex);
            }
        });

        // Modal controls
        closeModal.addEventListener('click', closeModalFunc);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModalFunc();
        });
        prevBtn.addEventListener('click', showPrevItem);
        nextBtn.addEventListener('click', showNextItem);

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') closeModalFunc();
                if (e.key === 'ArrowLeft') showPrevItem();
                if (e.key === 'ArrowRight') showNextItem();
            }
        });
    }

    // Modal functions
    function openModal(index) {
        const item = galleryItems[index];
        modalCaption.textContent = item.caption;
        
        if (item.type === 'image') {
            modalImage.src = item.src;
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
        } else if (item.type === 'video') {
            modalVideo.querySelector('source').src = item.src;
            modalVideo.load();
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
        }
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModalFunc() {
        modal.style.display = 'none';
        modalVideo.pause();
        document.body.style.overflow = 'auto';
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        openModal(currentIndex);
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        openModal(currentIndex);
    }

    // Initialize gallery
    if (galleryGrid) {
        initGallery();
    }
});