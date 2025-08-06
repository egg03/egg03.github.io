document.addEventListener('DOMContentLoaded', () => {
    // --- Debugging: Confirm main.js is loading ---
    console.log('main.js loaded and DOMContentLoaded event fired.');

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        console.log('Mobile menu elements found:', { mobileMenuButton, navMenu });

        mobileMenuButton.addEventListener('click', () => {
            console.log('Hamburger menu clicked!');
            console.log('Before toggle - navMenu classes:', navMenu.classList);
            navMenu.classList.toggle('hidden');
            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.add('hidden');
                }
            });
        });
    } else {
        console.error('Mobile menu button or navigation menu not found!');
    }

    // Project 2 Image Carousel Functionality
    const project2Image = document.getElementById('project2-image');
    const project2PrevButton = document.getElementById('project2-prev');
    const project2NextButton = document.getElementById('project2-next');

    // Image Modal elements
    const imageModal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close-modal');

    if (project2Image && project2PrevButton && project2NextButton) {
        console.log('Project 2 carousel elements found:', { project2Image, project2PrevButton, project2NextButton });

        const project2Images = [
            'assets/img/MCC Context Diagram.jpg',
            'assets/img/dashboard.png',
            'assets/img/home server.jpg'
        ];
        let currentImageIndex = 0;

        const updateProject2Image = () => {
            console.log('Updating image to index:', currentImageIndex, 'path:', project2Images[currentImageIndex]);
            project2Image.src = project2Images[currentImageIndex];
        };

        project2PrevButton.addEventListener('click', () => {
            console.log('Previous button clicked.');
            currentImageIndex = (currentImageIndex - 1 + project2Images.length) % project2Images.length;
            updateProject2Image();
        });

        project2NextButton.addEventListener('click', () => {
            console.log('Next button clicked.');
            currentImageIndex = (currentImageIndex + 1) % project2Images.length;
            updateProject2Image();
        });

        updateProject2Image();
    } else {
        console.error('Project 2 carousel elements (image, prev, or next button) not found!');
    }

    // =======================================================
    // ======== Image Modal (Expand on Click) Functionality ===
    // =======================================================
    
    // Check if all modal and project image elements exist
    if (project2Image && imageModal && modalImage && closeModal) {
        console.log('Image modal elements found. Adding click listeners.');

        // Open the modal when the project image is clicked
        project2Image.addEventListener('click', function () {
            // Get the current source of the carousel image
            modalImage.src = this.src; 
            // Remove the 'hidden' class to show the modal
            imageModal.classList.remove('hidden'); 
            console.log('Image opened in modal.');
        });

        // Close the modal when the close button is clicked
        closeModal.addEventListener('click', function () {
            // Add the 'hidden' class to hide the modal
            imageModal.classList.add('hidden'); 
            console.log('Modal closed via close button.');
        });

        // Close the modal if the user clicks anywhere on the overlay
        imageModal.addEventListener('click', function (event) {
            // Check if the click target is the modal itself and not the image inside it
            if (event.target === this) {
                imageModal.classList.add('hidden');
                console.log('Modal closed via overlay click.');
            }
        });
    } else {
        console.error('Image modal elements (modal, modal image, or close button) not found!');
    }
});
