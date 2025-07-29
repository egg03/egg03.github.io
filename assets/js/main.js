document.addEventListener('DOMContentLoaded', () => {
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
        // Define the images for the carousel
        const project2Images = [
            'assets/img/MCC Context Diagram.jpg', // Original image
            'assets/img/DA Image.png', // Example placeholder image 1
            'assets/img/MCC Gen Flowchart.jpg' // Example placeholder image 2
        ];
        let currentImageIndex = 0;

        // Function to update the displayed image
        const updateProject2Image = () => {
            project2Image.style.opacity = 0; // Start fade-out
            setTimeout(() => {
                project2Image.src = project2Images[currentImageIndex];
                project2Image.style.opacity = 1; // Fade-in
            }, 150); // Match this duration with CSS transition if any
        };

        // Event listener for the previous button
        project2PrevButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + project2Images.length) % project2Images.length;
            updateProject2Image();
        });

        // Event listener for the next button
        project2NextButton.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % project2Images.length;
            updateProject2Image();
        });

        // Initialize the carousel with the first image
        updateProject2Image();
    } else {
        console.error('Project 2 carousel elements not found!');
    }
});
