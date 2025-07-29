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

            // Toggle the 'hidden' class. Tailwind's 'md:flex' will ensure it's always visible on larger screens.
            navMenu.classList.toggle('hidden');

            console.log('After toggle - navMenu classes:', navMenu.classList);
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                // Check if the menu is not hidden AND the screen width is less than md breakpoint (768px)
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    console.log('Nav link clicked, closing mobile menu.');
                    navMenu.classList.add('hidden'); // Hide the menu
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

    if (project2Image && project2PrevButton && project2NextButton) {
        console.log('Project 2 carousel elements found:', { project2Image, project2PrevButton, project2NextButton });

        // Define the images for the carousel.
        // Ensure these paths are correct relative to your index.html file.
        const project2Images = [
            'assets/img/MCC Context Diagram.jpg', // Your first image
            'assets/img/DA Image.png', // Replace with the path to your 2nd image (e.g., 'assets/img/your-image-2.jpg')
            'assets/img/MCC Gen Flowchart.jpg' // Replace with the path to your 3rd image (e.g., 'assets/img/your-image-3.png')
            // Add more image paths here if you have more images for this carousel
        ];
        let currentImageIndex = 0;

        // Function to update the displayed image (simplified for debugging)
        const updateProject2Image = () => {
            console.log('Updating image to index:', currentImageIndex, 'path:', project2Images[currentImageIndex]);
            project2Image.src = project2Images[currentImageIndex];
        };

        // Event listener for the previous button
        project2PrevButton.addEventListener('click', () => {
            console.log('Previous button clicked.');
            currentImageIndex = (currentImageIndex - 1 + project2Images.length) % project2Images.length;
            updateProject2Image();
        });

        // Event listener for the next button
        project2NextButton.addEventListener('click', () => {
            console.log('Next button clicked.');
            currentImageIndex = (currentImageIndex + 1) % project2Images.length;
            updateProject2Image();
        });

        // Initialize the carousel with the first image
        updateProject2Image();
    } else {
        console.error('Project 2 carousel elements (image, prev, or next button) not found!');
    }
});
