function setupNavbar() {
  const nav = document.querySelector('nav');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  const defaultThemeColor = window.getComputedStyle(document.documentElement).getPropertyValue('--theme-color');
  const iconLinks = document.querySelectorAll(".navbar-nav .nav-link.active");
  const contentUtama = document.querySelector('.content-utama-index');
  const navbar = document.querySelector(".navbar-index");
  const blockBrand = document.querySelector('.img-lencana.navbar-brand');

  function updateNavbar() {
    if (window.scrollY > 0) {
      nav.classList.remove('navbar-dark', 'bg-background', 'navbar-expand');
      nav.classList.add('navbar-light', 'bg-dasarRoot', 'navbar-expand-md');
      document.documentElement.style.setProperty('--theme-color', defaultThemeColor);
      metaThemeColor.setAttribute('content', defaultThemeColor);
      iconLinks.forEach(link => link.classList.add("icon-mepet"));
      navbar.classList.add("navbar");
      contentUtama.style.top = '-245px'; // Ganti dengan nilai yang sesuai
    } else {
      nav.classList.remove('navbar-light', 'bg-dasarRoot', 'navbar-expand-md');
      nav.classList.add('navbar-dark', 'bg-background', 'navbar-expand');
      metaThemeColor.setAttribute('content', '#000000');
      iconLinks.forEach(link => link.classList.remove("icon-mepet"));
      navbar.classList.remove("navbar");
      contentUtama.style.top = '0';
    }
  }

  window.addEventListener('scroll', updateNavbar);
  window.addEventListener('load', function() {
    contentUtama.style.top = '0';
    nav.classList.add('bg-background', 'navbar-expand');
  });

  blockBrand.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', setupNavbar);