const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

function scrollAppear() {
    var conText = document.querySelector('.context');
    var introPosition = conText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;

    if (introPosition < screenPosition) {
        conText.classList.add('context-appear');
    }
}

window.addEventListener('scroll', scrollAppear);