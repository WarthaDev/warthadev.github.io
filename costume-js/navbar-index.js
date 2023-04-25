var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    // deafault hitam putih navbar
    if (window.pageYOffset > 55) {
        nav.classList.add('navbar-light', 'bg-light', 'shadow',);
    } else {
        nav.classList.remove('navbar-dark', 'bg-light', 'shadow',);
    }
    if (window.pageYOffset < 50) {
        nav.classList.add('navbar-dark', 'opacity-background');
    } else {
        nav.classList.remove('navbar-dark', 'opacity-background');
    }
});