function setupNavbar() {
  const navbar = document.querySelector(".navbar-index");
  const nav = document.querySelector('nav');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const defaultThemeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-color');
  const iconLinks = document.querySelectorAll(".navbar-nav .nav-link.active");
  const contentUtama = document.querySelector('.content-utama-showcase');
  const blockBrand = document.querySelector('.img-lencana', 'navbar-brand');

  window.addEventListener('load', function() {
    nav.classList.remove('navbar-dark', 'bg-dasarDark', 'navbar-expand-md');
      nav.classList.add('navbar-light', 'bg-dasarRoot', 'navbar-expand-md');
      document.documentElement.style.setProperty('--theme-color', defaultThemeColor);
      metaThemeColor.setAttribute('content', defaultThemeColor);
      iconLinks.forEach(link => link.classList.add("icon-mepet"));
      navbar.classList.add("navbar");
      contentUtama.style.top = '-0px'
  });

  blockBrand.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', setupNavbar);