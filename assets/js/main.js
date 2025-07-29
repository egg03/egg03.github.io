document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navMenu = document.getElementById('nav-menu');

    // Mobile menu toggle functionality
    if (mobileMenuButton && navMenu) {
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('hidden'); // Toggle the 'hidden' class
            navMenu.classList.toggle('flex');  // Toggle the 'flex' class to show/hide
            navMenu.classList.toggle('flex-col'); // Ensure it stacks vertically when open
        });

        // Close the mobile menu when a navigation link is clicked
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Only hide if it's currently visible and on a mobile screen
                if (!navMenu.classList.contains('hidden') && window.innerWidth < 768) {
                    navMenu.classList.add('hidden');
                    navMenu.classList.remove('flex');
                    navMenu.classList.remove('flex-col');
                }
            });
        });
    }

    // Modal functionality
    const projectModal = document.getElementById('project-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectDescription = document.getElementById('modal-project-description');
    const modalProjectLink = document.getElementById('modal-project-link');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');

    // Function to open the modal
    const openModal = (title, description, image, link) => {
        modalProjectTitle.textContent = title;
        modalProjectDescription.textContent = description;
        modalProjectLink.href = link;

        if (image) {
            modalProjectImage.src = image;
            modalProjectImage.classList.remove('hidden');
        } else {
            modalProjectImage.classList.add('hidden'); // Hide if no image provided
        }

        projectModal.classList.remove('hidden');
        // Trigger reflow to ensure transition plays
        void projectModal.offsetWidth; 
        projectModal.classList.add('opacity-100');
        projectModal.querySelector('div').classList.add('scale-100');
        projectModal.querySelector('div').classList.remove('scale-95');
        document.body.classList.add('overflow-hidden'); // Prevent scrolling body when modal is open
    };

    // Function to close the modal
    const closeModal = () => {
        projectModal.classList.remove('opacity-100');
        projectModal.querySelector('div').classList.remove('scale-100');
        projectModal.querySelector('div').classList.add('scale-95');
        projectModal.addEventListener('transitionend', () => {
            if (projectModal.classList.contains('opacity-0')) {
                projectModal.classList.add('hidden');
            }
        }, { once: true }); // Ensure event listener is removed after one use
        document.body.classList.remove('overflow-hidden');
    };

    // Event listeners for opening modal
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const title = button.dataset.projectTitle;
            const description = button.dataset.projectDescription;
            const image = button.dataset.projectImage;
            const link = button.dataset.projectLink;
            openModal(title, description, image, link);
        });
    });

    // Event listener for closing modal via button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Event listener for closing modal when clicking outside the content
    if (projectModal) {
        projectModal.addEventListener('click', (event) => {
            // Check if the click occurred directly on the modal background, not its content
            if (event.target === projectModal) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !projectModal.classList.contains('hidden')) {
            closeModal();
        }
    });
});
