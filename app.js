let isHomePage = document.location.pathname;

const logotype = document.querySelector('#logotype');
const dropDown = document.querySelector('#dropdown-toggle')
const submenu = document.querySelector('#submenu');

if (isHomePage === '/index.html' || isHomePage === '/') { // Home page
    const stars = document.querySelector('#stars');
    const moon = document.querySelector('#moon');
    const mountainsBehind = document.querySelector('#mountains-behind');
    const kurapika = document.querySelector('#kurapika');
    const kurapikaKuroro = document.querySelector('#kurapika-kuroro');
    const carouselImages = document.querySelectorAll('.swiper-slide img');

    window.onload = () => {
        logotype.style.opacity = 1;
        stars.style.opacity = 1;
        moon.style.opacity = 1;
        kurapika.style.opacity = 1;
        kurapika.style.transform = 'translate(0,0)';
        kurapika.style.height = '570px';
    }

    window.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            moon.style.transform = `translateY(${-120 + (window.scrollY * 0.6)}px)`;
            mountainsBehind.style.transform = `translateY(${window.scrollY * 0.4}px)`;
            window.scrollY > 300 ? stars.style.opacity = 0.05 : stars.style.opacity = 1;
            if (window.scrollY > 600) kurapikaKuroro.style.opacity = 0.4;
            if (window.scrollY > 1850) {
                carouselImages.forEach(img => {
                    img.style.height = '450px';
                    img.style.transform = 'translate(0,0)';
                })
            }
        })
    })
} else { // Any other character page

    const videoBg = document.querySelector('.video-bg');
    videoBg.addEventListener('canplay', () => {
        setTimeout(() => videoBg.play(), 700);
    })

    window.onload = () => {
        logotype.style.opacity = 1;
    }
}


// Applies to all pages
dropDown.addEventListener('click', () => {
    submenu.classList.toggle('drop-active');
    dropDown.classList.toggle('active');
    dropDown.classList.toggle('rotate');
})