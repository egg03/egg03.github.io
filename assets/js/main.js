/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

document.addEventListener('DOMContentLoaded', () => {
    // Get the modal element
    const modal = document.getElementById('imageModal');

    // Get the image tag inside the modal
    const modalImg = document.getElementById('img01');

    // Get the caption element
    const captionText = document.getElementById('caption');

    // Get the close button
    const closeButton = document.getElementsByClassName('close-button')[0];

    // Get all the images in the work section
    const workImages = document.querySelectorAll('.work__img img');

    // Loop through all images and add the click event listener
    workImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block'; // Show the modal
            modalImg.src = this.src; // Set the modal image source to the clicked image's source
            modalImg.alt = this.alt; // Set the alt text
            captionText.innerHTML = this.alt; // Set the caption to the image's alt text
        });
    });

    // When the user clicks on the close button, close the modal
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal content, close it
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Optional: Close modal with escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
